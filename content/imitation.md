# Hands On Imitation Learning with BC and BCO

Imitation Learning is a methodology by which an agent can learn a certain behaviour by imitating a set of expert trajectories. For example, think of a very good driver recording the drive with a camera to a particular destination. Say we have an autonomous car, which can learn to mimic that drive by imitating the recording captured by that driver. The expert trajectory in this case is the recording of the drive, and the agent is the car.

## Why Imitation Learning? 

Reinforcement Learning (RL) is an approach where an agent interacts with it’s environment in different ways, and learns a certain behaviour. The basic terminologies involved in such a setting are — state, action, rewards. At a surface level, in each state, the agent can take a certain action (referred to as the policy of the agent) and receive a reward. The goal of the problem is to maximize the expectation of the cumulative future rewards, and RL helps to find the optimal policy to achieve this. When we consider our own self, such interactions with our own environment are a major source of learning about ourselves and the environment.

Think about shooting a football at an empty goal (a goalkeeper introduces an another agent, which translates the problem to a Multi Agent Reinforcement Learning(MARL) problem)- at the position of the ball set, we can kick the ball in a certain way (state and action respectively) and we can learn how effective our kick was based on if we hit the goal or missed. That is our reward signal, and we can learn the optimal way to shoot a ball based on our interaction. Obviously, other factors like the wind, the texture of the grass, our footwear can influence the way we kick the ball, and this information can be encapsulated in the state.

Without going in any depth in RL, we can infer a fundamental problem — the reward setting. Setting the reward function can be tricky in certain situations :

Spare Reward Setting — In an environment where the rewards are sparse (for example in a game of chess where the only points you get are for checkmating the opponent), the agent finds it difficult to get a feedback on the actions it takes, thus complicating the learning process.
Ambiguous Reward Setting — Often, it becomes difficult to define an explicit reward function, for example a self driving car. In the large state space we have (millions of different conditions in the driving process), it becomes nearly impossible to set a perfect reward for each state-action pair.
Hence, this is where we can use Imitation Learning (IL) for the same task. We can use IL in such cases where collecting an expert’s demonstration is easier than formulating a reward function to learn a policy. This eliminates the need to go through the process of reward formulation and can be more efficient in the cases mentioned above.

In addition, RL methods include exploration steps which are infeasible sometimes. Say you have an expensive robotic setup, which is used to navigate on mountainous terrains. We cannot afford to let the robot fall off from the edges of the said terrain, which could be a possible action to take under the pretext of exploration, which is common in standard RL procedures.

Imitation Learning methodologies help mitigate these shortcomings. 

## A brief note on State Only Imitation Learning

State Only Imitation Learning (SOIL) is a subset of IL where the expert trajectory contains only the state information.

In a general IL setting, the expert demonstrations are : τ = {s₀, a₀, s₁, a₁, s₂, a₂, …}.

In a general SOIL setting, the expert demonstrations are : τ = {s₀, s₁, s₂, …}.

This raises a natural question : Why SOIL?

If you consider most of the real world scenarios, the access to the action information is often absent. If you consider the above example of kicking a football, when we watch footballers play, we do not obtain the action; such as at what momentum the ball is kicked, at what specific angle and the explicit actions of each joints of the foot for example. What we can obtain easily, is the state of the ball with respect to the player through moments in time. Thus the ease of collecting state information is a lot less expensive.

There are various such examples where collecting actions is possible, but it is not so efficient. In those situations, we use SOIL to learn the optimal behaviour.

## Behaviour Cloning and Behaviour Cloning from Observations

Behaviour Cloning (BC) is one of the most fundamental algorithms in Imitation Learning. It modifies the IL problem to a supervised classification or regression problem, where the states are the inputs, and the actions are the outputs. It is an offline algorithm, since it does not need any interactions with the environment. However, using the arguments above, we cannot rely on the presence of action information. Hence, we use Behaviour Cloning from Observations (BCO) that takes into consideration only the state sequences. The task here is to learn an "inverse dynamics model", which can be used to infer the actions given the state transitions. Once the actions are inferred, it is converted to a BC problem.

To understand these algorithms, you can 

These methods are powerful, but can suffer from compounding errors or the infamous covariate shift problem. The latter occurs when the agent finds itself in a state that is out of distribution to those it has seen in the expert trajectories. To solve this issue, we can use the Adversarial Imitation Learning class of algorithms. (Will be discussed in a future blog!)

## Let's Code!

