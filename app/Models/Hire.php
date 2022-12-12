<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hire extends Model
{
    use HasFactory;
    protected $fillable = ["user_id", "display", "status", "name", "email", "tel", "role", "hire_type", "range", "expirience", "duration", "vet", "description"];
    
}
