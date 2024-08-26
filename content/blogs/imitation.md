# Hands On Introduction to Imitation Learning with BC and BCO

Imitation Learning (IL) is a methodology by which an agent can learn a certain behaviour by imitating a set of expert trajectories. For example, think of a very good driver recording the drive with a camera to a particular destination. Say we have an autonomous car, which can learn to mimic that drive by imitating the recording captured by that driver. The expert trajectory in this case is the recording of the drive, and the agent is the car.

![image](https://github.com/user-attachments/assets/eb51f53a-8432-413f-bc5a-50d335bf03de)

This blog covers 2 fundamental algorithms in IL, with minimal mathematics and technical jargon.

## Why Imitation Learning? 

Reinforcement Learning (RL) is an approach where an agent interacts with it’s environment in different ways, and learns a certain behaviour. The basic terminologies involved in such a setting are — state, action, rewards. At a surface level, in each state, the agent can take a certain action (referred to as the policy of the agent) and receive a reward. The goal of the problem is to maximize the expectation of the cumulative future rewards, and RL helps to find the optimal policy to achieve this. When we consider our own self, such interactions with our own environment are a major source of learning about ourselves and the environment.

![image](https://github.com/user-attachments/assets/f9641774-58e2-4fad-b27b-4cda83c2009a)

Think about shooting a football at an empty goal (a goalkeeper introduces an another agent, which translates the problem to a Multi Agent Reinforcement Learning (MARL) problem)- at the position of the ball set, we can kick the ball in a certain way (state and action respectively) and we can learn how effective our kick was based on if we hit the goal or missed. That is our reward signal, and we can learn the optimal way to shoot a ball based on our interaction. Obviously, other factors like the wind, the texture of the grass, our footwear can influence the way we kick the ball, and this information can be encapsulated in the state.

Without going in any depth in RL, we can infer a fundamental problem — the reward setting. Setting the reward function can be tricky in certain situations :

Spare Reward Setting — In an environment where the rewards are sparse (for example in a game of chess where the only points you get are for checkmating the opponent), the agent finds it difficult to get a feedback on the actions it takes, thus complicating the learning process.
Ambiguous Reward Setting — Often, it becomes difficult to define an explicit reward function, for example a self driving car. In the large state space we have (millions of different conditions in the driving process), it becomes nearly impossible to set a perfect reward for each state-action pair.
Hence, this is where we can use Imitation Learning (IL) for the same task. We can use IL in such cases where collecting an expert’s demonstration is easier than formulating a reward function to learn a policy. This eliminates the need to go through the process of reward formulation and can be more efficient in the cases mentioned above.

In addition, RL methods include exploration steps which are infeasible sometimes. Say you have an expensive robotic setup, which is used to navigate on mountainous terrains. We cannot afford to let the robot fall off from the edges of the said terrain, which could be a possible action to take under the pretext of exploration, which is common in standard RL procedures.

Imitation Learning methodologies help mitigate these shortcomings. 

## A brief note on State Only Imitation Learning

State Only Imitation Learning (SOIL) is a subset of IL where the expert trajectory contains only the state information.

In a general IL setting, the expert demonstrations are : $\tau = ({s_0, a₀, s₁, a₁, s₂, a₂, …})$

In a general SOIL setting, the expert demonstrations are : $\tau = ({s₀, s₁, s₂, …})$

This raises a natural question : Why SOIL?

If you consider most of the real world scenarios, the access to the action information is often absent. If you consider the above example of kicking a football, when we watch footballers play, we do not obtain the action; such as at what momentum the ball is kicked, at what specific angle and the explicit actions of each joints of the foot for example. What we can obtain easily, is the state of the ball with respect to the player through moments in time. Thus the ease of collecting state information is a lot less expensive.

There are various such examples where collecting actions is possible, but it is not so efficient. In those situations, we use SOIL to learn the optimal behaviour.

## Behaviour Cloning and Behaviour Cloning from Observations

Behaviour Cloning (BC) is one of the most fundamental algorithms in Imitation Learning. It modifies the IL problem to a supervised classification or regression problem, where the states are the inputs, and the actions are the outputs. It is an offline algorithm, since it does not need any interactions with the environment. However, using the arguments above, we cannot rely on the presence of action information. Hence, we use Behaviour Cloning from Observations (BCO) that takes into consideration only the state sequences. The task here is to learn an "inverse dynamics model", which can be used to infer the actions given the state transitions. Once the actions are inferred, it is converted to a BC problem.

![image](https://github.com/user-attachments/assets/8720e0df-66a4-4ee9-81db-7e7e59e1b5fe)

To understand these algorithms, you can refer to the next section, where the processes will be detailed in the code.

These methods are powerful, but can suffer from compounding errors or the infamous covariate shift problem. The latter occurs when the agent finds itself in a state that is out of distribution to those it has seen in the expert trajectories. To solve this issue, we can use the Adversarial Imitation Learning class of algorithms. (Will be discussed in a future blog!)

## Let's Code!

In this section, I will be coding out Behaviour Cloning from Observations, which will cover the BC fundamentals as well. 

Let's proceed with the necessary imports. 
```
import gymnasium as gym
import sys
import torch
import numpy as np
import random
from stable_baselines3.common.vec_env import DummyVecEnv
import torch 
import torch.nn as nn
import torch.nn.functional as F
import torch.optim as optim
```
We will use the OpenAI Gym environments. 
```
env_name = "CartPole-v1" 
env = gym.make(env_name)
```
We first parameterize the policy with a neural network : 
```
class Policy(nn.Module):
    def __init__(self, input_dim, output_dim):
        super(MLP, self).__init__()
        self.fc1 = nn.Linear(input_dim, 256)
        self.fc2 = nn.Linear(256, 256)
        self.fc3 = nn.Linear(256, 256)
        self.fc4 = nn.Linear(256, output_dim)
    
    def forward(self, x):
        x = F.relu(self.fc1(x))
        x = F.relu(self.fc2(x))
        x = F.relu(self.fc3(x))
        x = torch.tanh(self.fc4(x))
        return x
```
Our next step is to initialize the Inverse Dynamics Model (IDM). This is also a neural network, and takes the state transition $(s,s')$ as an input, and outputs an action a such that applying the action $a$ in state s leads to the next state $s'$.

```
class InverseDynamics(nn.Module):
    def __init__(self, state_dim, action_space):
        super(InverseDynamics, self).__init__()
        self.fc1 = nn.Linear(state_dim*2, 256)
        self.fc2 = nn.Linear(256, 256)
        self.fc3 = nn.Linear(256, action_space)
    
    def forward(self, x):
        x = F.relu(self.fc1(x))
        x = F.relu(self.fc2(x))
        x = self.fc3(x)
        return x
```

To learn the IDM, we sample rollouts from the policy with the following function : 

```
def collect_trajectories(env, policy, n_episodes=100):
    env = DummyVecEnv([make_env(env.unwrapped.spec.id)])
    MAX_STEPS = 1000
    expert_data = []
    expert_actions = []
    for _ in range(n_episodes):
        state = env.reset()
        done = False
        step_count = 0
        while not done and step_count < MAX_STEPS:
            action, _states = dummy_policy.predict(state, deterministic=True)
            next_obs, reward, done, info = env.step(action)
            x = np.concatenate((state[0], next_obs[0])) # x = (s, s')
            expert_data.append(x)
            expert_actions.append(action)
            step_count +=1
            state = next_obs         
            if done or step_count >= MAX_STEPS:
                break
    return expert_data, expert_actions
```

Now we initialize the policy and the inverse dynamics model.

```
STATE_DIM = env.observation_space.shape[0]
ACTION_DIM =  env.action_space.shape[0]
policy = Policy(STATE_DIM, ACTION_DIM)
idm = InverseDynamics(STATE_DIM, ACTION_DIM)
```
We now sample the rollout with the policy, and use it to train the inverse dynamics model.

```
rollout, rollout_actions = collect_trajectories(env, policy, n_episodes=10)
rollout = torch.tensor(rollout, dtype = torch.float)
action = torch.tensor(rollout_actions, dtype=torch.float, requires_grad=True).squeeze().view(-1, 1)

#Model Hyperparameters
criterion = nn.MSELoss()
optimizer = optim.Adam(idm.parameters(), lr=0.001)
num_epochs = 10

#Train the inverse dynamics model here
for epoch in range(num_epochs):         
    predicted_actions = idm(rollout)
    print(predicted_actions.shape)
    loss = criterion(action, predicted_actions)
    optimizer.zero_grad()
    loss.backward()
    optimizer.step()
    print(f"Epoch [{epoch}/{num_epochs}], Loss: {loss.item()}")
```
We can now use the trained inverse dynamics model to infer the missing actions, and then we can proceed with Behaviour Cloning! We assume you have the expert trajectories as ```expert_trajectory``` which contains the state transitions.

```
state = torch.tensor(expert_trajectory[:, 0], dtype=torch.float)
inner_shape = expert_trajectory[0].shape[0] * expert_trajectory[0].shape[1]
expert_trajectory = expert_trajectory.reshape(-1, inner_shape)
expert_trajectory = torch.tensor(expert_trajectory, dtype = torch.float)
actions_expert_predicted = idm(expert_trajectory)

#Model hyperparameters
criterion_bc = nn.MSELoss()
optimizer_bc = optim.Adam(policy.parameters(), lr=0.001)
num_epochs = 10

#Train the policy here
for epoch in range(num_epochs):
    outputs = policy(state)
    losses = criterion_bc(outputs, actions_expert_predicted)
    optimizer_bc.zero_grad()
    losses.backward(retain_graph=True)
    optimizer_bc.step()
    print(f'Epoch [{epoch+1}/{num_epochs}], Loss: {losses.item()}')
```

Congratulations! You have now trained your policy using Behaviour Cloning!
You can evaluate this learned policy using the following :

```
NUM_TRAJECTORIES = 10
MAX_STEPS = 1000  # Maximum number of steps per trajectory
trajectories = []
trajectory_rewards = []

for _ in range(NUM_TRAJECTORIES):
    trajectory = []
    rewards = 0  
    state = env.reset()
    state = state[0]
    done = False
    step_count = 0

    while not done and step_count < MAX_STEPS:
        state_tensor = torch.tensor(state, dtype=torch.float)
        action = policy(state_tensor).detach().numpy()
        # action = action.detach().item()
        rewards += reward  
        state = next_state
        step_count += 1
    trajectory_rewards.append(rewards)

# Calculate the mean reward and standard deviation across all trajectories
mean_reward = np.mean(trajectory_rewards)
std_reward = np.std(trajectory_rewards)
print(f"Mean reward over {NUM_TRAJECTORIES} trajectories: {mean_reward} +- {std_reward}")
```

Feel free to change any of the hyperparameters to observe the changes in the results!

This was a very naive introduction to Imitation Learning; there are a lot of underlying concepts which go beyond the scope of the article. I hope you explore the domain of IL further!
