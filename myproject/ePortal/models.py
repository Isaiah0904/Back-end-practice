from django.db import models
from django.contrib.auth.models import User

# Create your models here.
from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.name
