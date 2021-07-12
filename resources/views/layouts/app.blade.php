<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CoreUI CSS -->
    {{-- <link rel="stylesheet" href="https://unpkg.com/@coreui/coreui/dist/css/coreui.min.css" crossorigin="anonymous"> --}}
    <link href="{{ asset('css/coreui-main.css') }}" rel="stylesheet">
    <link href="{{ asset('css/perfect-scrollbar.css') }}" rel="stylesheet">
    {{-- livewireStyles --}}
    @livewireStyles

    <title>{{ config('app.name', 'Laravel') }}</title>
</head>

<body class="c-app">

    @include('partials.sidebar')

<div class="c-wrapper c-fixed-components">
    <header class="c-header c-header-light c-header-fixed c-header-with-subheader">
            <button class="c-header-toggler c-class-toggler d-lg-none mfe-auto" type="button" data-target="#sidebar"
                data-class="c-sidebar-show">
                <svg class="c-icon c-icon-lg">
                    <use xlink:href="{{ asset('vendors/@coreui/icons/svg/free.svg#cil-menu') }}"></use>
                </svg>
            </button><a class="c-header-brand d-lg-none" href="#">
                <svg width="118" height="46" alt="CoreUI Logo">
                    <use xlink:href="{{ asset('assets/brand/coreui.svg#') }}"></use>
                </svg></a>
            <button class="c-header-toggler c-class-toggler mfs-3 d-md-down-none" type="button" data-target="#sidebar"
                data-class="c-sidebar-lg-show" responsive="true">
                <svg class="c-icon c-icon-lg">
                    <use xlink:href="{{ asset('vendors/@coreui/icons/svg/free.svg#cil-menu') }}"></use>
                </svg>
            </button>

            <ul class="c-header-nav ml-auto mr-4">
                <li class="c-header-nav-item d-md-down-none mx-2"><a class="c-header-nav-link" href="#">
                        <svg class="c-icon">
                            <use xlink:href="{{ asset('vendors/@coreui/icons/svg/free.svg#cil-bell') }}"></use>
                        </svg></a></li>
                <li class="c-header-nav-item d-md-down-none mx-2"><a class="c-header-nav-link" href="#">
                        <svg class="c-icon">
                            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-list-rich"></use>
                        </svg></a></li>
                <li class="c-header-nav-item d-md-down-none mx-2"><a class="c-header-nav-link" href="#">
                        <svg class="c-icon">
                            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-envelope-open"></use>
                        </svg></a></li>
                <li class="c-header-nav-item dropdown"><a class="c-header-nav-link" data-toggle="dropdown" href="#"
                        role="button" aria-haspopup="true" aria-expanded="false">
                        <div class="c-avatar"><img class="c-avatar-img" src="assets/img/avatars/6.jpg"
                                alt="user@email.com"></div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right pt-0">
                        <div class="dropdown-header bg-light py-2"><strong>Account</strong></div><a
                            class="dropdown-item" href="#">
                            <svg class="c-icon mr-2">
                                <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-bell"></use>
                            </svg> Updates<span class="badge badge-info ml-auto">42</span></a><a class="dropdown-item"
                            href="#">
                            <svg class="c-icon mr-2">
                                <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-envelope-open"></use>
                            </svg> Messages<span class="badge badge-success ml-auto">42</span></a><a
                            class="dropdown-item" href="#">
                            <svg class="c-icon mr-2">
                                <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-task"></use>
                            </svg> Tasks<span class="badge badge-danger ml-auto">42</span></a><a class="dropdown-item"
                            href="#">
                            <svg class="c-icon mr-2">
                                <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-comment-square"></use>
                            </svg> Comments<span class="badge badge-warning ml-auto">42</span></a>
                        <div class="dropdown-header bg-light py-2"><strong>Settings</strong></div><a
                            class="dropdown-item" href="#">
                            <svg class="c-icon mr-2">
                                <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-user"></use>
                            </svg> Profile</a><a class="dropdown-item" href="#">
                            <svg class="c-icon mr-2">
                                <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-settings"></use>
                            </svg> Settings</a><a class="dropdown-item" href="#">
                            <svg class="c-icon mr-2">
                                <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-credit-card"></use>
                            </svg> Payments<span class="badge badge-secondary ml-auto">42</span></a><a
                            class="dropdown-item" href="#">
                            <svg class="c-icon mr-2">
                                <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-file"></use>
                            </svg> Projects<span class="badge badge-primary ml-auto">42</span></a>
                        <div class="dropdown-divider"></div><a class="dropdown-item" href="#">
                            <svg class="c-icon mr-2">
                                <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-lock-locked"></use>
                            </svg> Lock Account</a><a class="dropdown-item" href="#">
                            <svg class="c-icon mr-2">
                                <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-account-logout"></use>
                            </svg> Logout</a>
                    </div>
                </li>
            </ul>
        </header>
        <div class="c-body">
            <main class="c-main">
                {{-- ***************************************************** --}}
                @yield('content')
            </main>
        </div>

        <!-- Optional JavaScript -->
        <script src="{{ asset('js/perfect-scrollbar.main.js') }}"></script>
        <script src="{{ asset('js/popper.js') }}"></script>
        <script src="{{ asset('js/coreui-main.js') }}"></script>

        {{-- Adding the CKEditor --}}
        <script src="https://cdn.ckeditor.com/ckeditor5/29.0.0/classic/ckeditor.js"></script>
        {{-- <script src="{{ asset('js/ckeditor.js') }}"></script> --}}

        {{-- Livewirescripts --}}
        @livewireScripts
        <script src="https://cdn.jsdelivr.net/gh/livewire/sortable@v0.x.x/dist/livewire-sortable.js"></script>
        {{-- <script src="{{ asset('js/livewire-sortable.js') }}"></script> --}}

    @yield('scripts')

</body>

</html>

