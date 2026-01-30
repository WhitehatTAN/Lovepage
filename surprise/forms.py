from django import forms
from .models import LoveMessage

class LoveMessageForm(forms.ModelForm):
    class Meta:
        model = LoveMessage
        fields = [
            'sender_name',
            'receiver_name',
            'photo_sender',
            'photo_receiver'
        ]
