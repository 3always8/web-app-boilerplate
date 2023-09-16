FROM python:3.10

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Create and set working directory
RUN mkdir /backend
WORKDIR /backend

# Install dependencies
COPY requirements.txt /backend/
RUN python -m venv env
RUN env/bin/pip install --upgrade pip
RUN env/bin/pip install -r requirements.txt

# Copy project files
COPY . /backend/

# Run migrations
RUN env/bin/python manage.py migrate