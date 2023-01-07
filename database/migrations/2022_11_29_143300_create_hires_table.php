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
            $table->string("slug")->unique();
            $table->string("user_id");
            $table->string('display')->default('1');
            $table->string('status')->default('0');
            $table->string("name");
            $table->string("email");
            $table->string("tel");
            $table->string("companyName");
            $table->string("logoURL");
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
