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

    <section class="my-6 w-full lg:w-1/2 mx-auto p-2">
        <div class="p-2 border border-pink-lighter">
            <h1 class="mb-4 text-pink-dark text-center text-5xl">00:05:37</h1>
            <form class="flex justify-center flex-col">
                <div class="flex justify-center flex-col sm:flex-row mb-2">
                    <input value="Content" class="text-xl text-pink-dark w-full mb-2 sm:mb-0 md:w-1/2 px-4 py-2 sm:mx-1 bg-pink-lightest focus:bg-white border border-pink-dark outline-none focus:border-pink-dark rounded" type="text">
                    <select class="appearance-none text-xl w-full md:w-1/2 px-4 py-2 sm:mx-1 bg-pink-lighter text-pink-darkest border border-transparent outline-none focus:border-pink-dark">
                        <option value="">Välj projekt</option>
                        <option selected>Rally Sweden</option>
                        <option>Gård & Djurhälsan</option>
                    </select>
                </div>
                <div class="flex justify-center">
                    <button class="w-full sm:mx-1 text-xl bg-pink-darker hover:bg-pink-darkest text-pink-lightest px-4 py-2 rounded">Stopp</button>
                </div>
            </form>
        </div>
    </section>

    <!--
    <section class="mt-6 w-full lg:w-1/2 mx-auto p-2" style="margin-bottom: 300px;">
        <div class="div p-2">
            <h1 class="mb-4 text-pink-dark text-center text-5xl">00:00:00</h1>
            <form class="flex justify-center flex-col">
                <div class="flex justify-center flex-col sm:flex-row mb-2">
                    <input autofocus class="text-xl text-pink-dark w-full mb-2 sm:mb-0 md:w-1/2 px-4 py-2 sm:mx-1 bg-pink-lightest focus:bg-white border border-pink-dark outline-none focus:border-pink-dark rounded" type="text" placeholder="Vad ska du jobba med?">
                    <select class="appearance-none text-xl w-full md:w-1/2 px-4 py-2 sm:mx-1 bg-pink-lighter text-pink-darkest border border-transparent outline-none focus:border-pink-dark">
                        <option value="" selected>Välj projekt</option>
                        <option>Rally Sweden</option>
                        <option>Gård & Djurhälsan</option>
                    </select>
                </div>
                <div class="flex justify-center">
                    <button class="w-full sm:mx-1 text-xl bg-pink-dark hover:bg-pink-darker text-pink-lightest px-4 py-2 rounded">Börja jobba</button>
                </div>
            </form>
        </div>
    </section>
    -->

    <section class="entries mx-auto">
        <h2 class="mb-2 mx-2 text-pink-darker">Tidrapport</h2>
        <div class="flex flex-row flex-wrap px-1 lg:px-0">
            @for($i = 0; $i < 5; $i++)
            <div class="entry w-full sm:w-1/2 lg:w-1/3 p-1 lg:p-2">
                <div class="bg-orange-lightest shadow">
                    <time class="block px-4 pt-2 pb-1 bg-orange-lighter text-orange-darker">Rally Sweden</time>
                    <div class="px-4 py-2">
                        <h2 class="mt-2 mb-4 text-orange-darker">02:37:01</h2>
                        <span class="block">Lagt in content</span>
                    </div>
                </div>
            </div>
            @endfor
        </div>
    </section>
</body>

</html> 