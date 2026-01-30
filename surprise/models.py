from django.db import models

# Create your models here.

import uuid

class LoveMessage(models.Model):
    sender_name = models.CharField(max_length=100)
    receiver_name = models.CharField(max_length=100)
    photo_sender = models.ImageField(upload_to='photos/')
    photo_receiver = models.ImageField(upload_to='photos/')
    slug = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.sender_name} ❤️ {self.receiver_name}"

