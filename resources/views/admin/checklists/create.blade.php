@extends('layouts.app')

@section('content')
    <div class="container-fluid">
        <div class="fade-in">
            <div class="row">
                <div class="col">
                    <div class="card">
                        {{-- Form Validation --}}
                        @if ($errors->any())
                            <div class="alert alert-danger">
                                <ul>
                                    @foreach ($errors->all() as $error)
                                        <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        @endif
                        <form action="{{ route('admin.checklist_groups.checklists.store', $checklistGroup) }}" method="POST">
                            @csrf
                            <div class="card-header">{{ __('New Checklist in') }} {{ $checklistGroup->name }}</div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group row">
                                            <label for="name" class="col-md-2">{{ __('Name') }}</label>
                                            <input class="form-control col-md-8" name="name" type="text" value="{{ old('name') }}">
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer row">
                                    <div class="col-md-2"></div>
                                    <button class="btn btn-md btn-primary" type="submit"> {{ __('Save') }}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
