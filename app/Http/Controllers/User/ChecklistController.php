<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Checklist;
use App\Services\ChecklistService;
use Illuminate\Http\Request;
use Illuminate\View\View;

class ChecklistController extends Controller
{
    public function show(Checklist $checklist): View
    {
        // Sync chceklist from Admin
        (new ChecklistService())->sync_checklist($checklist, auth()->id());

        return view('users.checklist.show', compact('checklist'));
    }
}
