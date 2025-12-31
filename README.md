# PackLab

**PackLab** is an interactive 2D bin packing and layout optimization engine designed to study and visualize heuristic algorithms for rectangle packing problems.

The project focuses on algorithmic design, constraint handling, and empirical comparison of packing strategies, with an emphasis on clarity, reproducibility, and visualization.

---

## Problem Overview

The 2D bin packing problem consists of placing a set of rectangular items inside a fixed container such that:
- Rectangles do not overlap
- All rectangles lie entirely within the container
- A given objective function is optimized (e.g. minimizing unused space)

This problem is NP-hard and commonly addressed using heuristic and approximation algorithms.

---

## Project Goals

- Implement and compare multiple 2D packing heuristics
- Provide a clean, framework-agnostic core algorithm engine
- Visualize packing results interactively
- Measure and compare packing efficiency and runtime
- Serve as an experimental platform for algorithmic exploration

---

## Planned Algorithms

- Shelf algorithm (baseline greedy heuristic)
- MaxRects algorithm (state-of-the-art heuristic)

Future extensions may include metaheuristics and hybrid approaches.

---

## Constraints and Features

- Optional rectangle rotation
- Fixed container dimensions
- Priority-based rectangle ordering
- Deterministic execution for reproducibility

---

## Architecture

The project is structured in two main layers:

- **Core engine**: Pure TypeScript implementation of packing algorithms and metrics  
- **Visualization layer**: Vue-based interface for interaction and rendering

The core logic is completely independent of the UI framework.

---

## Technology Stack

- TypeScript
- Vue 3

---

## Status

This project is currently under active development and intended as an academic-oriented exploration of 2D packing algorithms.
