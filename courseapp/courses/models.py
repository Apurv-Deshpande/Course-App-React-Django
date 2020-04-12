from django.db import models
from django.contrib.auth.models import User


class Course(models.Model):
    title = models.CharField(max_length=100, unique = True)
    youtube = models.CharField(max_length=500 )
    published = models.DateTimeField()
    owner = models.ForeignKey(
        User, related_name="courses", on_delete=models.CASCADE, null=True)
  


