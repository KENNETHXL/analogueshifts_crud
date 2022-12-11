<x-mail::message>
# Hire Talent
An application was Submited To a Hire Talent.
By: {{ $data['name'] }}
<br>
<x-mail::panel>
# Application Details
<br>
<br>
Role: {{ $data['role'] }}
<br>
<br>
Location: {{ $data['hire_type'] }}
<br>
<br>
Salary Range: ${{ $data['range'] }}
<br>
<br>
Expirience: {{ $data['expirience'] }}
<br>
<br>
Job Duration: {{ $data['duration'] }}
<br>
<br>
Description: {{ $data['description'] }}
<br>
<br>
<a color='primary' href="mailto: {{ $data['vet'] }}">Application/Vetting URL</a>

</x-mail::panel>

Thanks,
<br>
email: {{ $data['email'] }},
<br>
Tel: <a color='primary' href="tel: {{ $data['tel'] }}">{{ $data['tel'] }}</a>.
<br>
<a color='primary' href="mailto: {{ $data['email'] }}">Reply</a>
{{-- {{ config('app.name') }} --}}

<x-mail::button :url="'analogueshifts.com/hire'" color='success'>
View Applications
</x-mail::button>
</x-mail::message>
