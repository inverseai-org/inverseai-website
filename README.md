# Mechanistic Interpretability for AI Alignment (Inverse AI)
> Automated Circuit Discovery & Intervention

[![Website Status](https://img.shields.io/website?url=<YOUR_SITE_URL>)](<YOUR_SITE_URL>)
[![License](https://img.shields.io/github/license/<ORG>/<REPO>.svg)](LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/<ORG>/<REPO>.svg)](https://github.com/<ORG>/<REPO>/commits/main)

A research code‑base and public website accompanying my PhD project on **mechanistic interpretability**—the study of how internal circuits in large language models (LLMs) implement behaviours such as bias, truthfulness and toxicity, and how targeted interventions can make those models safer and more aligned.  
The repository hosts (a) the static site with project updates & demo notebooks, and (b) the open‑source toolkit used in the papers and benchmarks.

---

## Table of Contents
1. [Project Description](#project-description)  
2. [Key Features](#key-features)  
3. [Live Demo](#live-demo)  
4. [Quick Start](#quick-start)  
5. [Project Structure](#project-structure)  
6. [Research Road‑map](#research-road-map)  
7. [Contributing](#contributing)  
8. [License](#license)  
9. [Citation](#citation)  
10. [References](#references)

---

## Project Description
Large language models excel at many tasks but remain **opaque “black boxes”**.  
This project develops *scalable* methods to:

* discover neural circuits in Transformer models responsible for alignment‑critical behaviours;
* intervene on those circuits (e.g., activation clamping, local weight edits);
* empirically evaluate safety improvements without degrading task performance.

---

## Key Features
| Area | What it Delivers |
|------|------------------|
| **Interpretability Toolkit** | Python API (built on [TransformerLens](https://github.com/TransformerLensOrg/TransformerLens)) to intercept activations, trace pathways, and visualise circuits. |
| **Automated Circuit Discovery** | End‑to‑end pipeline: data probing → attribution (activation patching) → circuit graph export. |
| **Targeted Interventions** | Functions for feature steering, parameter patching, and post‑hoc editing with unit tests. |
| **Benchmark Suite** | Scripts to measure toxicity reduction, factual recall and bias before/after interventions. |
| **Website & Docs** | Static site (built with **<TECH e.g. Docusaurus/Jekyll/Next.js>**) hosting docs, tutorials & experiment dashboards.|

---

## Live Demo
> 🌐 **Production site:** <https://<YOUR_SITE_URL>>

Screenshots and sample notebooks are in [`docs/assets`](docs/assets).

---

## Quick Start

### Prerequisites
* Python 3.10+  
* PyTorch ≥ 2.2 with CUDA 11.x  
* Optional: [Weights & Biases](https://wandb.ai/) for experiment tracking  

### Installation
```bash
git clone https://github.com/<ORG>/<REPO>.git
cd <REPO>
pip install -r requirements.txt          # core + web
# or, for dev:
pip install -e ".[dev,docs]"
```

### Run the Website Locally
```bash
# example for Docusaurus
cd website
npm install
npm run start
```

### First Experiment
```bash
python scripts/discover_circuits.py        --model meta-llama/Meta-Llama-3-8B        --task toxicity
```

---

## Project Structure
```text
<REPO>/
├── src/              # core interpretability library
│   ├── circuits/     # discovery algorithms
│   ├── interventions/
│   └── evaluation/
├── website/          # static site source
├── scripts/          # CLI entry‑points
├── models/           # (optional) cached model weights
├── docs/             # extra papers, posters, PDF exports
└── tests/
```

---

## Research Road‑map
| Phase | Goal | Status |
|-------|------|--------|
| 1. Circuit Discovery | Map circuits linked to toxicity, bias, factual recall using activation patching. | *in progress* |
| 2. Intervention | Develop feature‑steering & weight‑editing methods that preserve perplexity. | *planned* |
| 3. Large‑Scale Eval | Benchmark on multiple LLM sizes; release results & tooling. | *pending* |

---

## Contributing
1. **Fork** the repo & create a feature branch.  
2. Follow the coding style in `.editorconfig` & run `pre‑commit`.  
3. Open a pull request with a clear description of *why* the change matters.  
Please read [`CONTRIBUTING.md`](CONTRIBUTING.md) for full guidelines.  

---

## License
Distributed under the **<LICENSE NAME>** license. See [`LICENSE`](LICENSE) for details.

---

## Citation
If you use this code or dataset in your research, please cite:
```bibtex
@software{<YOUR_LASTNAME>_2025_mechanistic,
  author       = {<Your Name>},
  title        = {Mechanistic Interpretability for AI Alignment},
  year         = {2025},
  publisher    = {GitHub},
  url          = {https://github.com/<ORG>/<REPO>}
}
```

---

## References
1. A. Rai *et al.*, “Mechanistic Interpretability for Large Language Models: Techniques and Challenges,” *arXiv* 2407.02646, 2024.  
2. **TransformerLens**—“Library for Mechanistic Interpretability,” GitHub, 2023.  
3. S. Syed *et al.*, “Activation Patching: Identifying Neural Circuits,” *arXiv* 2309.16042, 2023.  
4. AI Safety Fundamentals, “Introduction to Mechanistic Interpretability,” 2023.

---

> **Note**: Replace every placeholder (angles `<…>` or CAPS) before pushing.  
> For additional badges (e.g., GitHub Actions, DOI via Zenodo), see <https://shields.io>.
