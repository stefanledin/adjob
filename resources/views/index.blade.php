<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>AdJob</title>
        <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
    </head>
    <body class="bg-pink-lightest">
        <header class="px-4 py-2 bg-pink-light">
            <h2 class="text-pink-darkest">AdJob</h2>
        </header>

        <div class="h-2 bg-pink-dark"></div>

        <section class="mt-6" style="margin-bottom: 300px;">
            <h1 class="text-pink-dark text-center text-5xl">00:00:00</h1>
            <select class="appearance-none text-xl px-4 py-2 bg-pink-dark text-white">
                <option>Rally Sweden</option>
                <option>Gård & Djurhälsan</option>
            </select>
            <input type="text" placeholder="Vad ska du jobba med?">
        </section>

        <section class="entries container mx-auto ">
            @for($i = 0; $i < 5; $i++)
                <div class="entry mb-4 mx-auto w-1/3 bg-orange-lightest shadow">
                    <time class="block px-4 pt-2 pb-1 bg-orange-lighter text-orange-darker">Rally Sweden</time>
                    <div class="px-4 py-2">
                        <h2 class="mt-2 mb-4 text-orange-darker">02:37:01</h2>
                        <span class="block">Lagt in content</span>
                    </div>
                </div>
            @endfor
            
        </section>
    </body>
</html>