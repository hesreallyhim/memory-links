from setuptools import setup, find_packages

def parse_requirements(filename):
    """Load requirements from a pip requirements file."""
    with open(filename, 'r') as file:
        lines = file.readlines()
        # Remove comments and empty lines
        lines = [line.strip() for line in lines if line and not line.startswith('#')]
        return lines

setup(
    name="memory-links-server",
    version="0.1.0",
    author="hesreallyhim",
    author_email="hesrealllyhim@proton.me",
    description="backend for memory-link app",
    long_description=open('README.md').read(),
    long_description_content_type='text/markdown',
    url="https://github.com/hesreallyhim/memory-links/server",
    packages=find_packages(),
    install_requires=parse_requirements('requirements.txt'),
    extras_require=parse_requirements('requirements.dev.txt'),
)
