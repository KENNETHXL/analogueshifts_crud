<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hires', function (Blueprint $table) {
            $table->id();
            $table->string('status')->default('pending');
            $table->string("name");
            $table->string("email");
            $table->string("tel");
            $table->string("role");
            $table->string("hire_type");
            $table->string("range");
            $table->string("expirience");
            $table->string("duration");
            $table->string("vet");
            $table->text("description");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hires');
    }
};
