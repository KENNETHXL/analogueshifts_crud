<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hire extends Model
{
    use HasFactory;
    protected $fillable = ["name", "email", "tel", "role", "hire_type", "range", "expirience", "duration", "description"];
}
