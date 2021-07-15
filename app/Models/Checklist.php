<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use PhpParser\Builder\Function_;
use PhpParser\Node\Expr\FuncCall;

class Checklist extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['checklist_group_id','name','user_id', 'checklist_id'];

    public Function tasks(){
        return $this->hasMany(Task::class);
    }
}
