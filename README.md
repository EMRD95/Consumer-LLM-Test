# Consumer-LLM-Benchmark
Simple manual benchmark for local models run on consumer hardware.

All tests are performed on a single GPU hardware, up to a 4090. The test consist of 20 questions, 10 questions regarding general reading comprehension, common sense and questions that test the usual limitations of large language models. This first set of questions is easy for humans but hard for a LLM. The next 10 questions are more complex, and involve a chain of thought reasoning, deductive and inductive reasoning.

The questions are asked up to 4 times to the LLM, if for instance it's wrong, inconclusive or it's right but seemingly as a placebo. A [a grade](https://emrd95.github.io/Consumer-LLM-Benchmark/) is assessed on this basis witha simple check box static web page. The LLM can answer directly to the question, or provide a python script to resolve the answer for more complex math problems. Some questions are successive and maniuplate context to try to output an eroneous answer (question 1,2,3). For non successive questions, the context is cleaned to avoid that the LLM "figures out" that it has to answer to puzzles. It's better to clean context for question 6, 7 and 8 for instance, in order to generate an erroneous answer with the most powerful models by opening a new chat or reloading the model.

All tests are run on [oobabooga](https://github.com/oobabooga/text-generation-webui) on a single GPU hadware.

The goal is to simply provide a general view of local models capabilites outside the scope of automated benchmarks. It's also a good way to list available models.

The questions are provided without answers, they are either hand crafted, modified, taken from math tests or social media. Some can be subject to copyright.

# Benchmark Results

| Model | Grade | tk/s | Results |
|----------|----------|----------|----------|
| ChatGPT4 | 12.25 | na | [Details](https://github.com/EMRD95/Consumer-LLM-Benchmark/blob/main/grades/ChatGPT4grades-11-26-2023.json) |
| ChatGPT3.5 | 9.00 | na | [Details](https://github.com/EMRD95/Consumer-LLM-Benchmark/blob/main/grades/ChatGPT3.5grades-11-26-2023.json) |
