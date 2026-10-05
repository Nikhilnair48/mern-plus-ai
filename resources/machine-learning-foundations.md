# Machine Learning Foundations

This guide lists free, structured resources for learning machine learning. Begin with the core path; use the remaining sections for reference or further study.

## Prerequisites

Before starting, be comfortable with:

- Basic Python: variables, functions, collections, loops, and modules
- Basic algebra: equations, functions, graphs, and averages
- Running Python in a notebook such as Google Colab or Jupyter

Calculus and linear algebra are useful, but they do not need to be completed before beginning machine learning.

## Recommended core path

Follow these resources in order rather than completing several courses at once.

### 1. Microsoft Machine Learning for Beginners

[Machine Learning for Beginners](https://github.com/microsoft/ML-For-Beginners) is a 12-week, 26-lesson curriculum covering classical machine learning with Python and scikit-learn. It includes quizzes, exercises, assignments, projects, and solutions. Use it as the primary beginner curriculum.

### 2. Google Machine Learning Crash Course

[Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course/) explains regression, classification, data preparation, generalization, overfitting, neural networks, embeddings, production systems, and fairness through short lessons and browser-based exercises. Use it for conceptual review. Complete Google's [prerequisites and prework](https://developers.google.com/machine-learning/crash-course/prereqs-and-prework) if NumPy or pandas is unfamiliar.

### 3. Machine Learning in Python with scikit-learn

The free [scikit-learn MOOC](https://inria.github.io/scikit-learn-mooc/) teaches predictive modelling, preprocessing, pipelines, cross-validation, model selection, failure analysis, and model interpretation. It includes notebooks, exercises, and solutions. Use it after the introductory lessons to learn model-training and evaluation workflows.

### 4. An Introduction to Statistical Learning with Python

[An Introduction to Statistical Learning](https://www.statlearning.com/) provides a free Python edition with a practical lab in every chapter. It covers regression, classification, resampling, regularization, tree-based methods, support vector machines, deep learning, and unsupervised learning. Use it as the main reference textbook.

## Mathematics reference

[Mathematics for Machine Learning](https://mml-book.github.io/) is a free reference for linear algebra, calculus, probability, optimization, linear regression, principal component analysis, Gaussian mixture models, and support vector machines. Consult relevant chapters as needed; it is not a prerequisite.

## Deep learning continuation

Complete at least one classical machine-learning course before starting this section.

### Practical Deep Learning for Coders

[Practical Deep Learning for Coders](https://course.fast.ai/) is a free, project-oriented course covering computer vision, natural language processing, tabular data, collaborative filtering, deployment, PyTorch, fastai, and Hugging Face. Its [companion book](https://course.fast.ai/Resources/book.html) is available as free executable notebooks.

### Dive into Deep Learning

[Dive into Deep Learning](https://d2l.ai/) is a free interactive book that combines explanations, mathematics, and executable notebooks. It covers linear models, multilayer perceptrons, backpropagation, convolutional and recurrent networks, attention, Transformers, computer vision, and natural language processing.

### Neural Networks: Zero to Hero

[Neural Networks: Zero to Hero](https://karpathy.ai/zero-to-hero.html) builds neural networks from first principles in Python. It progresses from a small automatic-differentiation engine through backpropagation, language modelling, multilayer perceptrons, normalization, and a GPT-style Transformer. It assumes solid Python and introductory knowledge of derivatives.

### MIT Introduction to Deep Learning

[MIT Introduction to Deep Learning](https://learn.mit.edu/?resource=3916) is a free university course covering deep-learning foundations and applications in computer vision, natural language processing, biology, and other domains.

## JavaScript option

Python is the recommended primary language for learning machine learning. JavaScript is useful when the goal is to run a model in a browser or integrate it into a web application.

### TensorFlow.js for JavaScript developers

[TensorFlow for JavaScript Development](https://www.tensorflow.org/resources/learn-ml/basics-of-tensorflow-for-js-development) is a structured curriculum for developers who already know HTML, CSS, JavaScript, Node.js, and the command line. It covers pretrained models, custom models, classification, regression, transfer learning, model conversion, and browser deployment.

Continue with the official [TensorFlow.js tutorials](https://www.tensorflow.org/js/tutorials) for complete implementation examples.

## Later specializations

These resources are complete and free, but they are not starting points for machine-learning beginners.

- [CS50's Introduction to Artificial Intelligence with Python](https://cs50.harvard.edu/ai/) covers search, knowledge representation, uncertainty, optimization, machine learning, neural networks, and language through seven weeks of lectures and projects. It expects substantial prior Python experience.
- [Hugging Face LLM Course](https://huggingface.co/learn/llm-course/en/chapter1/1) covers Transformers, tokenizers, datasets, fine-tuning, model evaluation, and advanced LLM workflows. It should follow an introductory deep-learning course.
- [Deep Learning](https://www.deeplearningbook.org/) by Ian Goodfellow, Yoshua Bengio, and Aaron Courville is a comprehensive free reference. It is more suitable for deeper study than for a first introduction.

## Suggested practice sequence

For each major topic:

1. Learn the concept and terminology.
2. Work through a small notebook or guided exercise.
3. Implement the essential algorithm with NumPy when practical.
4. Compare the implementation with scikit-learn or PyTorch.
5. Apply it to a small dataset and explain the evaluation results.

Good first projects include predicting a numerical value with regression, classifying a small tabular dataset, grouping data with clustering, and deploying a simple browser-based model with TensorFlow.js.
