from django import forms
from .models import User
from django.core.exceptions import ValidationError
from django.contrib.auth.hashers import make_password

class CustomUserForm(forms.ModelForm):
    confirm_password = forms.CharField(max_length=100, widget=forms.PasswordInput)

    class Meta:
        model = CustomUser
        fields = ['name', 'password']
        widgets = {
            'password': forms.PasswordInput(),
        }

    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get('password')
        confirm_password = cleaned_data.get('confirm_password')

        if password != confirm_password:
            raise ValidationError("Passwords do not match")

    def save(self, commit=True):
        user = super().save(commit=False)
        # Hash the password before saving it
        user.password = make_password(self.cleaned_data["password"])
        if commit:
            user.save()
        return user
