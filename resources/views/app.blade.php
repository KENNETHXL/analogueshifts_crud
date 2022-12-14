<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Analogueshifs') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">

        {{-- @if(config('app.env') == 'local')
            <script src="http://localhost:35729/livereload.js"></script>
        @endif --}}

        <link rel="stylesheet" href="{{ mix("css/app.css") }}">

        <!-- Scripts -->
        @routes
        {{-- @viteReactRefresh --}}
        {{-- @vite('resources/js/app.jsx') --}}
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia

        <script src="{{ mix("js/app.js") }}"></script>
    </body>
</html>
