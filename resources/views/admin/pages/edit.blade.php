@extends('layouts.app')

@section('content')
    <div class="container-fluid">
        <div class="fade-in">
            <div class="row">
                <div class="col">
                    <div class="card">
                        {{-- Edit Pages Form Validation --}}
                        @if ($errors->any())
                            <div class="alert alert-danger">
                                <ul>
                                    @foreach ($errors->all() as $error)
                                        <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        @endif

                        @if (session('message'))
                            <div class="alert alert-success">{{ session('message') }}</div>
                        @endif

                        <form action="{{ route('admin.pages.update', $page) }}" method="POST">
                            @csrf
                            @method('PUT')

                            <div class="card-header">{{ __('Edit Page') }}</div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group row">
                                            <label for="title" class=" col-md-2">{{ __('Title') }}</label>
                                            <input class="form-control col-md-8" name="title" type="text"
                                                value="{{ $page->title }}">
                                        </div>
                                        <div class="form-group row">
                                            <label for="content" class=" col-md-2">{{ __('Content') }}</label>
                                            <textarea class="form-control col-md-8" name="content" row="5"
                                                id="task-textarea">
                                                        {{ $page->content }}</textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer row">
                                    <div class="col-md-2"></div>
                                    <button class="btn btn-sm btn-primary" type="submit">
                                        {{ __('Save Page') }}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

{{-- Add The Editor - CKEditor --}}
@section('scripts')
    <script>
        ClassicEditor
            .create(document.querySelector('#task-textarea'))
            .catch(error => {
                console.error(error);
            });
    </script>
@endsection
