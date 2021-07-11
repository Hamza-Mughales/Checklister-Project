@extends('layouts.app')

@section('content')
    <div class="container-fluid">
        <div class="fade-in">
            <div class="row">
                <div class="col">
                    <div class="card">
                        {{-- Edit Checklist Form Validation --}}
                        @if ($errors->any())
                            <div class="alert alert-danger">
                                <ul>
                                    @foreach ($errors->all() as $error)
                                        <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        @endif
                        <form
                            action="{{ route('admin.checklist_groups.checklists.update', [$checklistGroup, $checklist]) }}"
                            method="POST">
                            @csrf
                            @method('PUT')
                            <div class="card-header">{{ __('Edit Checklist') }}</div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group row">
                                            <label for="name" class=" col-md-2">{{ __('Name') }}</label>
                                            <input class="form-control col-md-8" name="name" type="text"
                                                value="{{ $checklist->name }}">
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer row">
                                    <div class="col-md-2"></div>
                                    <button class="btn btn-sm btn-primary" type="submit">
                                        {{ __('Save Checklist') }}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <form action="{{ route('admin.checklist_groups.checklists.destroy', [$checklistGroup, $checklist]) }}"
                        method="POST">
                        @csrf
                        @method('DELETE')
                        <button class="btn btn-sm btn-danger" type="submit"
                            onclick="return confirm('{{ __('Are you sure?') }}')">
                            {{ __('Delete This Checklist') }}</button>
                    </form>
                    <hr />

                    {{-- ---- Task TAble ---- --}}
                    <div class="card">
                        <div class="card-header"><i class="fa fa-align-justify"></i>{{ __('List Of Task') }}</div>
                        <div class="card-body">
                            <table class="table table-responsive-sm">

                                <tbody>
                                    @foreach ($checklist->tasks as $task)
                                        <tr>
                                            <td>{{ $task->name }}</td>
                                            <td>
                                                <a class="btn btn-sm btn-success"
                                                    href="{{ route('admin.checklists.tasks.edit', [$checklist, $task]) }}">{{ __('Edit') }}</a>
                                                <form style="display: inline-block"
                                                    action="{{ route('admin.checklists.tasks.destroy', [$checklist, $task]) }}"
                                                    method="POST">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button class="btn btn-sm btn-danger" type="submit"
                                                        onclick="return confirm('{{ __('Are you sure?') }}')">
                                                        {{ __('Delete') }}</button>
                                                </form>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>

                            </table>
                        </div>
                    </div>

                    {{-- Add Task Form Validation --}}
                    @if ($errors->storetask->any())
                        <div class="alert alert-danger">
                            <ul>
                                @foreach ($errors->storetask->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                    @endif
                    <div class="card">
                        <form action="{{ route('admin.checklists.tasks.store', [$checklist]) }}" method="POST">
                            @csrf
                            <div class="card-header">{{ __('New Task') }}</div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group row">
                                            <label for="name" class="col-md-2">{{ __('Name') }}</label>
                                            <input class="form-control col-md-8" name="name" type="text"
                                                value="{{ old('name') }}">
                                        </div>
                                        <div class="form-group row">
                                            <label for="description" class="col-md-2">{{ __('Description') }}</label>
                                            <textarea class="form-control col-md-8" name="description" rows="5">
                                                {{ old('description') }}</textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer row ">
                                    <div class="col-md-2"></div>
                                    <button class="btn btn-sm btn-primary " type="submit"> {{ __('Save Task') }}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection