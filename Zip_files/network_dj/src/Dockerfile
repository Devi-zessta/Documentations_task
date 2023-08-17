FROM  python:3.7.17-slim-bullseye

WORKDIR /app

COPY . /app

RUN pip install requirements.txt

CMD ["python","manage.py","runserver"]


