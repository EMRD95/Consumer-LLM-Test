# Consumer-LLM-Test
A simple manual benchmark for local models run on consumer hardware.

All tests are performed on a single GPU hardware, up to a 3090. The test consists of [20 questions](https://github.com/EMRD95/Consumer-LLM-Benchmark/blob/main/LLMs%20Benchmark%20questions%20no%20answers.pdf), 10 questions regarding general reading comprehension, common sense and questions that test the usual limitations of large language models. The next 10 questions are more complex, and involve a chain of thought reasoning, deductive and inductive reasoning.

The questions are asked up to 4 times to the LLM, if, for instance, if it's wrong, inconclusive, or it's right but seemingly a placebo. A grade is assessed on this basis with a simple check box [static web page](https://emrd95.github.io/Consumer-LLM-Benchmark/). The LLM can answer directly, or provide a python script to solve the answer to more complex math problems. Some questions are successive and manipulate context to try to output an erroneous answer (question 1,2,3). For non-successive questions, the context is cleaned to avoid that the LLM "figures out" that it has to answer to puzzles. It's better to clean context for question 6, 7 and 8 for instance, in order to generate an erroneous answer with the most powerful models by opening a new chat or reloading the model.

All tests are run on [oobabooga](https://github.com/oobabooga/text-generation-webui) on a single GPU hardware with the best possible parameters for each models. A few popular SaaS LLMs are added for comparison.

The goal is simply to provide a general view of local models capabilities outside the scope of automated benchmarks. It's also a good way to list available models.

The questions are provided without answers, they are either handcrafted, modified, taken from math tests or social media. Some can be subject to copyright

# Test Results

| Model | Grade/20 | tk/s | Context | Results | Date |
|----------|----------|----------|----------|----------|----------|
| [ChatGPT4](https://chat.openai.com/) | 12.25 | na | na | [Details](https://github.com/EMRD95/Consumer-LLM-Benchmark/blob/main/grades/ChatGPT4grades-11-26-2023.json) | 11/26/23 |
| [ChatGPT3.5](https://chat.openai.com/) | 9.00 | na | na | [Details](https://github.com/EMRD95/Consumer-LLM-Benchmark/blob/main/grades/ChatGPT3.5grades-11-26-2023.json) | 11/26/23 |
| [LoneStriker_Yi-34B-200K-4.65bpw-h6-exl2](https://huggingface.co/LoneStriker/Yi-34B-200K-4.65bpw-h6-exl2) | 4.50 | 20 | 4096 | [Details](https://github.com/EMRD95/Consumer-LLM-Benchmark/blob/main/grades/LoneStriker_Yi-34B-200K-4.65bpw-h6-exl2grades-11-26-2023.json) | 11/26/23 |
| [LoneStriker_lzlv_70b_fp16_hf-2.4bpw-h6-exl2](https://huggingface.co/LoneStriker/lzlv_70b_fp16_hf-2.4bpw-h6-exl2) | 4.00 | 4 | 4096 | [Details](https://github.com/EMRD95/Consumer-LLM-Benchmark/blob/main/grades/LoneStriker_Yi-34B-200K-4.65bpw-h6-exl2grades-11-26-2023.json) | 11/26/23 |
| [GoogleBard](https://bard.google.com/chat) | 3.25 | na | na | [Details](https://github.com/EMRD95/Consumer-LLM-Benchmark/blob/main/grades/GoogleBardgrades-11-26-2023.json) | 11/26/23 |
| [LoneStriker openchat_3.5-16k-8.0bpw-h8-exl2](https://huggingface.co/LoneStriker/openchat_3.5-16k-8.0bpw-h8-exl2/tree/main) | 2.50 | 40 | 8192 | [Details](https://github.com/EMRD95/Consumer-LLM-Benchmark/blob/main/grades/LoneStrikeropenchat_3.5-16k-8.0bpw-h8-exl2grades-11-28-2023.json) | 11/28/23 |
