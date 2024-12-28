[//]: <> (Authors: Pranav Bhat, Pranav Vinodh, Vanshika Mittal)

![multimodal_ml](https://github.com/user-attachments/assets/055c3836-e185-463a-b10c-6a600e576709)

# MultiModal Magic: Integrating Diverse Data for Smarter AI systems

## Introduction- What does multimodal mean?

Traditional machine learning often focuses on one specific data type, like text or images. But, what if we could combine these forms of data to give our model a chance at making more complete predictions? Multimodal learning in machine learning is a type of learning where the model is trained to understand and work with multiple forms of input data, such as text, images, and audio.

![image](https://github.com/user-attachments/assets/4dae9b6b-81d9-418e-9f16-9a39e1821d3d)

## Why even use multiple modalities?

Multimodal machine learning is gaining traction because of how it can imitate the way humans naturally process information from several different sources. These different types of data sources correspond to different modalities of the world. The world can be seen, heard, or described in words. For a ML model to be able to perceive the world in all of its complexity and understanding different modalities is a useful skill. 
It is an approach that is becoming increasingly relevant in applications in fields such as healthcare. For example, combining patient records with medical images can lead to more accurate diagnoses.

## Architectures for Multi-modal Learning

### 1. Early Fusion
- Early fusion approach combines raw data from multiple sensors before any high-level processing or decision-making. It helps capture and process interactions between modalities at the data level.
  - The advantage here is that we don’t have to perform dedicated processing for each modality (i.e, it only requires a single learning phase)
  - The downside to this approach is that raw input data may not contain rich semantic information. This means that the model is not able to capture complex interactions between the modalities.

### 2. Late Fusion
- In this approach, all the modalities are learned independently and are combined right before the model makes a decision. In this type of multimodal, individual models are trained separately for different modes (Text, Vision, etc.) to make a local prediction. These individual results are then combined at a higher level to make the final fused prediction.
  - The advantage of late fusion is its simplicity and isolation. Each model gets to learn super rich information on its modality.
  - The downside is that the system is not able to learn complex modal interactions, and thus does not benefit directly from the complementary information each modality might offer.
  - Another downside is the high compute cost for processing data of each mode separately.

<div style="display: flex; text-align: center;">
  <img src="https://github.com/user-attachments/assets/1ac8c672-625b-4dfc-81b5-54469ac9110e" alt="Image 1" style="margin-bottom: 20px;">
  <img src="https://github.com/user-attachments/assets/1bc6402c-a804-44e9-ad2d-13d5e7c001eb" alt="Image 2">
</div>

## Use cases:

1. **Medical Diagnosis**: Multimodal AI assists in medical diagnosis by combining data from various sources. It includes patient records, medical scans, and textual reports. Further, it aids doctors and medical professionals to diagnose and formulate effective patient treatment plans and improve patient care. 
2. **Video Summarization**: The Multimodal Artificial intelligence model facilitates video summarization by extracting audio and visual characteristics. It speeds up content consumption, improves video content management systems, and makes browsing more efficient.  
3. **Sentiment Analysis**: Multimodal AI can detect and understand human emotions from certain sources, including voice tone, text sentiment, and facial expressions. It assists in sentiment analysis on social media and the mental health support system to gauge and respond to users’ emotional support.  

## Hands on project using PyTorch

### Problem statement

[Fakeddit](https://fakeddit.netlify.app/) is a fine-grained multimodal fake news detection dataset, designed to advance efforts to combat the spread of misinformation in multiple modalities, namely text and image data. The following model was built to classify the data in Fakeddit into 6 pre-defined classes:

![image](https://github.com/user-attachments/assets/094731e1-5f0d-4c5f-93b0-04b789964a99)

- Authentic/true news content
- Satire/Parody
- Content with false connection
- Imposter content
- Manipulated content
- Misleading content

The following model combines features extracted from text (using BERT) and images (using ResNet50). These features are processed through fully connected layers and combined. The combined features are then passed through a softmax layer to predict the probabilities of each class, which represent whether the news is fake or not. The model is initialized and moved to the specified device for training or inference.

### Let's code

Before you proceed with this section, it is expected that you have a decent knowledge with the implementation of `pytorch` and its associated deep-learning libraries. For a starting point, you can refer the [documentation](https://pytorch.org/docs/stable/index.html).

#### Import the required libraries
First let's ensure you have the right python and deep learning libraries ready.
```python
import numpy as np
import pandas as pd
import os
import urllib.request
import sys
import random
from PIL import Image
import matplotlib.pyplot as plt

from sklearn.model_selection import train_test_split
from sklearn.utils.class_weight import compute_class_weight
from sklearn.metrics import precision_score, recall_score

import torch
import torch.nn as nn
from torch.utils.data import Dataset, DataLoader
import torch.nn.functional as f
import torch.optim as optim

import torchvision
from torchvision.transforms import v2
from torchvision import models
from torchvision.models import resnet50, ResNet50_Weights
import torch.optim.lr_scheduler as lr_scheduler
from transformers import BertModel, BertTokenizer
```

#### Text Feature Extraction
In the Text-Feature Extractor, we used a pre-trained [BERT](https://huggingface.co/docs/transformers/en/model_doc/bert) Model. `BERT`, or Bidirectional Encoder Representations from Transformers, is a machine learning framework for natural language processing (NLP) trained on the Toronto BookCorpus (800M words) and English Wikipedia (2,500M words).

##### Why use BERT and BERT Embeddings in this specific use-case?
- `BERT` uses a bi-directional approach considering both the left and right context of words in a sentence, instead of analyzing the text sequentially.
- We use BERT to extract features, namely word and sentence embedding vectors, from text data.
- These vectors are used as high-quality feature inputs to downstream models. NLP models such as LSTMs or CNNs require inputs in the form of numerical vectors, hence BERT is a good option for encoding variable length text strings.

##### Model Working
- The model takes the title_input_ids and title_attention_mask as inputs and processes them using BERT.
- Extracts the [CLS] token representation from the last hidden states of BERT, which serves as a summary of the input text.
- Applies dropout to the extracted text features.
- Passes the features through a fully connected layer to map them to the number of classes.

```python
# Load pre-trained BERT model and tokenizer
model_name = 'bert-base-uncased'
tokenizer = BertTokenizer.from_pretrained(model_name)
bert_model = BertModel.from_pretrained(model_name, output_hidden_states = True)

# Put the model in evaluation mode, which turns off dropout regularization which is used in training.
bert_model.eval()
```

```python
def get_bert_embedding(text):
    # Tokenize input text and get token IDs and attention mask
    inputs = tokenizer.encode_plus(text, add_special_tokens = True, return_tensors='pt', max_length=80, truncation=True, padding='max_length')

    return inputs['input_ids'].squeeze(0), inputs['attention_mask'].squeeze(0)
```

#### Image Feature Extraction Process
In the Image-Feature Extractor, we used a pre-trained [ResNet50](https://huggingface.co/microsoft/resnet-50) model trained on the ImageNet dataset for image classification tasks.

##### Why use ResNet50?
- ResNet50 is a deep learning model launched in 2015 by Microsoft Research for the purpose of visual recognition. The model is 50 layers deep.
- ResNet50's architecture (including shortcut connections between layers) significantly improves on the vanishing gradient problems that arise during backpropagation which allows for higher accuracy.
- The skip connections in ResNet50 facilitate smoother training and faster convergence. Thus making it easier for the model to learn and update weights during training.

##### Model working?
- The model processes the input image using ResNet50 to extract features.
- Applies dropout to the extracted image features.
- Passes the features through a fully connected layer to map them to the number of classes.

#### Feature fusion:
We’ve implemented a late fusion architecture for the model. This combines the feature of the two separate modalities.

##### Model working
- Combines the text and image features using element-wise maximum operation.
- Applies the softmax function to the combined features to obtain class probabilities.

This is one of the most crucial steps of building the model and requires careful tuning of the hyperparameters. Refer this [source](https://pytorch.org/tutorials/beginner/hyperparameter_tuning_tutorial.html#sphx-glr-beginner-hyperparameter-tuning-tutorial-py) to learn more about hyperparameter tuning in deep learning models using PyTorch.
Here we have set the hyperparameters for you to ensure optimal results.
```python
class BERTResNetClassifier(nn.Module):
    def __init__(self, num_classes=6):
        super(BERTResNetClassifier, self).__init__()

        self.num_classes = num_classes

        # Image processing (ResNet)
        self.image_model = resnet50(weights=ResNet50_Weights.IMAGENET1K_V1)

        # Image processing (Fully Connected Layer)
        self.fc_image = nn.Linear(in_features=1000, out_features=num_classes, bias=True)

        # Dropout layer
        self.drop = nn.Dropout(p=0.3)

        # Text processing (using the 768-dimensional BERT arrays)
        self.text_model = BertModel.from_pretrained("bert-base-uncased")

        # Text processing (Fully Connected Layer)
        self.fc_text = nn.Linear(in_features=self.text_model.config.hidden_size, out_features=num_classes, bias=True)

        # Fusion and classification
        self.softmax = nn.Softmax(dim=1)

    def forward(self, image, text_input_ids, text_attention_mask,):
        # Image branch
        x_img = self.image_model(image)
        x_img = self.drop(x_img)
        x_img = self.fc_image(x_img)

        # Text branch
        x_text_last_hidden_states = self.text_model(
            input_ids = text_input_ids,
            attention_mask = text_attention_mask,
            return_dict=False
        )
        x_text_pooled_output = x_text_last_hidden_states[0][:, 0, :]
        x_text = self.drop(x_text_pooled_output)
        x_text = self.fc_text(x_text_pooled_output)

        # Fusion and max merge
        x = torch.max(x_text, x_img)

        # Classification
        #x = self.softmax(x) #-> already applied in crossentropy loss

        return x
```
Now we proceed to the training and evaluation stage of the model that we have created above.

#### Training and Evaluation Loop
The below code implements all the necessary steps to train the model.
```python
class EarlyStopping:
    def __init__(self, patience=4, verbose=False, delta=0):
        self.patience = patience
        self.verbose = verbose
        self.counter = 0
        self.best_loss = None
        self.early_stop = False
        self.delta = delta

    def __call__(self, val_loss):
        if self.best_loss is None:
            self.best_loss = val_loss
        elif val_loss > self.best_loss + self.delta:
            self.counter += 1
            if self.verbose:
                print(f"EarlyStopping counter: {self.counter} out of {self.patience}")
            if self.counter >= self.patience:
                self.early_stop = True
        else:
            self.best_loss = val_loss
            self.counter = 0
```
Set the `labels` and the `class_weights` for training the model.
```python
labels = df_train['6_way_label'].to_numpy()
class_weights = compute_class_weight(class_weight='balanced', classes=np.unique(labels), y=labels)
class_weights = torch.tensor(class_weights, dtype=torch.float).to(device)
```
The functions which implement the pipeline for training and evaluating the model are below
```python
def train_model(model, train_loader, val_loader, criterion, optimizer, scheduler, num_epochs):
    early_stopping = EarlyStopping(patience=5, verbose=True)
    
  # Training loop
    for epoch in range(num_epochs):
        model.train()
        running_loss = 0.0

        for input_ids, attention_mask, label, img in train_loader:
            input_ids = input_ids.to(device)
            attention_mask = attention_mask.to(device)
            label = label.to(device)
            img = img.to(device)
                
            optimizer.zero_grad()

          # Forward pass
            outputs = model(img, input_ids, attention_mask)
            loss = criterion(outputs, label)

          # Backward pass and optimization
            loss.backward()
            optimizer.step()

            running_loss += loss.item()* img.size(0)
            
       # Validating model and ensuring loss is decreasing     
        model.eval()
        val_loss = 0.0
        correct_preds = 0
        with torch.no_grad():
            for input_ids, attention_mask, label, img in val_loader:
                input_ids = input_ids.to(device)
                attention_mask = attention_mask.to(device)
                label = label.to(device)
                img = img.to(device)
    
                outputs = model(img, input_ids, attention_mask)
                loss = criterion(outputs, label)
                val_loss += loss.item() * img.size(0)

                _, preds = torch.max(outputs, 1)
                correct_preds += torch.sum(preds == label)

        val_loss = val_loss / len(val_loader.dataset)
        accuracy = correct_preds.double() / len(val_loader.dataset)
        scheduler.step(val_loss)
        print(f'Epoch {epoch+1}/{num_epochs}, Training Loss: {running_loss/len(train_loader.dataset):.4f}, Validation Loss: {val_loss:.4f}, Accuracy: {accuracy:.4f}')

        # Early stopping
        early_stopping(val_loss)
        if early_stopping.early_stop:
            print("Early stopping triggered. Stopping training.")
            break
```

Now let's evaluate the model
```python
def evaluate_model(model, test_loader, criterion):
    model.eval()
    val_losses = []
    correct_preds = 0

    all_preds = []
    all_labels = []

    with torch.no_grad():
        for input_ids, attention_mask, label, img in test_loader:
            input_ids = input_ids.to(device)
            attention_mask = attention_mask.to(device)
            label = label.to(device)
            img = img.to(device)

            outputs = model(
                  image = img,
                  text_input_ids = input_ids,
                  text_attention_mask = attention_mask
            )

            # Final Softmax layer returns class predictions per sample in batch
            # Highest probability value resembles class prediction and is assigned to preds variable
            _, preds = torch.max(outputs, dim=1)
            #print(outputs)

            # Loss is calculated by applying Cross Entropy Loss
            val_loss = criterion(outputs, label)

            # Counting correct model predictions and incrementing correct prediction count
            correct_preds += torch.sum(preds == label)

            # Appending current loss per batch to list of losses per epoch
            val_losses.append(val_loss.item())
            
            all_preds.extend(preds.cpu().numpy())
            all_labels.extend(label.cpu().numpy())
            

    accuracy = float((correct_preds.double() / len(df_test)) * 100)
    precision = precision_score(all_labels, all_preds, average='weighted')
    recall = recall_score(all_labels, all_preds, average='weighted')

    print("\nAccuracy: ", accuracy)
    print("Precision: ", precision)
    print("Recall: ", recall)
```
Finally, use this snippet of code to run the entire pipeline of training and evaluating the model.

```python
device = 'cuda' if torch.cuda.is_available() else 'cpu'
model = BERTResNetClassifier(num_classes=6)
model= model.to(device)

criterion = nn.CrossEntropyLoss(weight=class_weights)
optimizer = torch.optim.Adam(model.parameters(), lr=1e-5)
scheduler = lr_scheduler.ReduceLROnPlateau(optimizer, min_lr=1e-6, factor=0.5, patience=1, verbose=True)
num_epochs = 20

train_model(model, train_loader,val_loader, criterion, optimizer, scheduler, num_epochs)

evaluate_model(model, test_loader, criterion)
```

You are setup. Well done!

### Inferences
After training the model on the images of the dataset along with the text modality, we obtain the following metrics after 20 straight epochs.

![image](https://github.com/user-attachments/assets/45d2b7aa-04e3-4641-92b1-7d4172d45d18)

The model obtains an overall accuracy of 77.47%. If we were to calculate the F1 score as well, we can employ the formula below:

![image](https://github.com/user-attachments/assets/32dd25fb-39d9-4c65-90d1-f9839667cf5a)

The F1 score is approximately 0.774, which is quite a decent score for a multi-modal task of this scale and underlines the usefulness and future scope for improvement in this field.

## Conclusion

By far, multimodal machine learning provides powerful tools for integrating diverse data types, enhancing the accuracy and robustness of models. Through the hands-on project with the FakeEdit dataset, we explored how combining visual and textual data can improve fake news detection. As multimodal approaches continue to evolve, they hold the potential to revolutionize industries by enabling more comprehensive and context-aware AI systems.

## References

These are some of the references that we have used to write this blog.

[1] https://keras.io/examples/nlp/multimodal_entailment/

[2] _I. Gallo, G. Ria, N. Landro and R. L. Grassa, “Image and Text fusion for UPMC Food-101 using BERT and CNNs,” 2020 35th International Conference on Image and Vision Computing New Zealand (IVCNZ), 2020, pp. 1–6, doi: 10.1109/IVCNZ51579.2020.9290622._

[3] _CommerceMM: Large-Scale Commerce MultiModal Representation Learning with Omni Retrieval Licheng Yu, Jun Chen, Animesh Sinha, Mengjiao MJ Wang, Hugo Chen, Tamara L. Berg, Ning Zhang_

[4] _“FLAVA: A Foundational Language And Vision Alignment Model Amanpreet Singh, Ronghang Hu, Vedanuj Goswami, Guillaume Couairon, Wojciech Galuba, Marcus Rohrbach, Douwe Kiela_

[5] _Multi-Modal Classification Using Images and Text Stuart Miller, Justin Howard, Paul Adams,_

[6] _Baltrušaitis, Tadas, Chaitanya Ahuja, and Louis-Philippe Morency. “Multimodal machine learning: A survey and taxonomy.” IEEE transactions on pattern analysis and machine intelligence 41.2 (2018): 423–443._

  
