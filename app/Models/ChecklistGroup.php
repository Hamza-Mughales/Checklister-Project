<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ChecklistGroup extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['name', 'checklist_gruop_id'];

    public function checklists()
    {
        return $this->hasMany(checklist::class);
    }
}
