<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Testing\Fluent\Concerns\Has;

class Category extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
    'name',
];

    public function sportingGoods(){
        return $this->hasMany(SportingGoods::class, 'category_id', 'id');
    }

    protected static function booted()
    {
        self::deleting(function(Category $category) {
            $category->sportingGoods()->each(function(SportingGoods $sportingGoods) {
                $sportingGoods->delete();
            });
        });
    }
}
