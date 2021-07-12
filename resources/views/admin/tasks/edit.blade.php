@extends('layouts.app')

@section('content')
    <div class="container-fluid">
        <div class="fade-in">
            <div class="row">
                <div class="col">
                    <div class="card">
                        {{-- Edit Checklist Form Validation --}}
                        @if ($errors->storetask->any())
                            <div class="alert alert-danger">
                                <ul>
                                    @foreach ($errors->storetask->all() as $error)
                                        <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        @endif
                        <form
                            action="{{ route('admin.checklists.tasks.update', [$checklist, $task]) }}" method="POST">
                            @csrf
                            @method('PUT')
                            <div class="card-header">{{ __('Edit Task') }}</div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group row">
                                            <label for="name" class=" col-md-2">{{ __('Name') }}</label>
                                            <input class="form-control col-md-8" name="name" type="text"
                                                value="{{ $task->name }}">
                                        </div>
                                        <div class="form-group row">
                                            <label for="description" class=" col-md-2">{{ __('Description') }}</label>
                                            <textarea class="form-control col-md-8" name="description" row="5" id="task-textarea">
                                                {{ $task->description }}</textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer row">
                                    <div class="col-md-2"></div>
                                    <button class="btn btn-sm btn-primary" type="submit">
                                        {{ __('Save Task') }}</button>
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
        .create( document.querySelector( '#task-textarea' ) )
        .catch( error => {
            console.error( error );
        } );
</script>
@endsection
