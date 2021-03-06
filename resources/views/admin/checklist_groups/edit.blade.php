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
                        <form action="{{ route('admin.checklist_groups.update', $checklistGroup) }}" method="POST">
                            @csrf
                            @method('PUT')
                            <div class="card-header">{{ __('Edit Checklist Group') }}</div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group row">
                                            <label class="col-md-2" for="name">{{ __('Name') }}</label>
                                            <input class="form-control col-md-8" name="name" type="text"
                                                value="{{ $checklistGroup->name }}">
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
                    <form action="{{ route('admin.checklist_groups.destroy', $checklistGroup) }}" method="POST">
                        @csrf
                        @method('DELETE')
                        <button class="btn btn-md btn-danger" type="submit"
                            onclick="return confirm('{{ __('Are you sure?') }}')">
                            {{ __('Delete This Checklist') }}</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
