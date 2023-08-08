FROM python:3.11-slim-buster
ENV FLASK_APP=backend.py
EXPOSE 5000
WORKDIR /app 
COPY . . 
RUN pip install -r requirements.txt 
ENTRYPOINT ["python", "-m", "flask", "run", "--host=0.0.0.0" ]
