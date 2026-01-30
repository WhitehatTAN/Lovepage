from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, redirect, get_object_or_404
from .forms import LoveMessageForm
from .models import LoveMessage

def create_message(request):
    if request.method == 'POST':
        form = LoveMessageForm(request.POST, request.FILES)
        if form.is_valid():
            message = form.save()
            return redirect('view_message', slug=message.slug)
    else:
        form = LoveMessageForm()

    return render(request, 'surprise/create.html', {'form': form})


def view_message(request, slug):
    message = get_object_or_404(LoveMessage, slug=slug)
    return render(request, 'surprise/view.html', {'message': message})
