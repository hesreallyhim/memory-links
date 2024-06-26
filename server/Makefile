# Use bash as the shell
SHELL := /bin/bash



# Python virtual environment
VENV := venv
PYTHON := $(VENV)/bin/python
PIP := $(VENV)/bin/pip

# Target to create the virtual environment
.PHONY venv
venv:
	@echo "Setting up virtual environment..."
	python3 -m venv $(VENV)
	@echo "Virtual environment created."

# Target to run the development server
.PHONY: dev
dev: $(PYTHON)
	@$(PYTHON) -m uvicorn app.main:app --reload

# This target checks if the virtual environment is set up
$(PYTHON):
	@$(MAKE) venv

# .PHONY venv
# venv:
# 	python -m venv $(VENV)
# 	source $(VENV)/bin/activate

$(VENV)/bin/python:
	@echo "Virtual environment not found. Creating virtual environment..."
	venv

.PHONY: dev
dev:
	$(PYTHON) -m uvicorn app.main:app --reload

.PHONY: start
start:
	$(PYTHON) -m uvicorn app.main:app

.PHONY: test
test:
	$(PYTHON) -m pytest

.PHONY: lint
lint:
	$(PYTHON) -m flake8 app tests

.PHONY: format
format:
	$(PYTHON) -m black app tests

.PHONY: type-check
type-check:
	$(PYTHON) -m mypy app

.PHONY: clean-venv
clean-venv:
	@echo "Cleaning up venv..."
	rm -rf $(VENV)

.PHONY: clean-build
clean-build:
	@echo "Cleaning up build files..."
	rm -rf build dist

.PHONY: clean-pyc
clean-pyc:
	@echo "Cleaning up bytecode files..."
	find . -type f -name '*.pyc' -delete
	find . -type d -name '__pycache__' -delete

.PHONY clean-all
clean-all: clean-venv clean-build clean-pyc
	