<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\User;
use App\Models\SportingGoods;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();
        // Category::factory(10)->create();
        //SportingGoods::factory(10)->recycle($categories)->create();


        $user = User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
        $user->assignPermission('admin');

        $categories = Category::factory(5)->create();
        SportingGoods::factory(20)->recycle($categories)->create();
    }
}
