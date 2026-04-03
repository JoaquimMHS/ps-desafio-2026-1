<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSportingGoodsRequest;
use App\Http\Requests\UpdateSportingGoodsRequest;
use App\Models\SportingGoods;
use Illuminate\Support\Facades\Storage;
use Nette\Utils\Json;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class SportingGoodsController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    protected $sportingGoods;

    public function __construct(SportingGoods $sportingGoods)
    {
        $this->sportingGoods = $sportingGoods;
    }
    public function index(): JsonResponse
    {
        $sportingGoods = $this->sportingGoods->with('category')->get();
        return response()->json($sportingGoods, Response::HTTP_OK);
    }

   
    public function store(StoreSportingGoodsRequest $request): JsonResponse
    {
        $data = $request->validated();
        if($request->hasFile('image_url')){
            $path = $request->file('image_url')->store('sportingGoods', 'public');
            $data['image_url'] = url('storage/'.$path);
        }
        $sportingGoods = $this->sportingGoods->create($data);
        $id = $sportingGoods->id;
        $sportingGoods_category = $this->sportingGoods->with('category')->findOrFail($id);
        
        return response()->json($sportingGoods_category, Response::HTTP_CREATED);

    }


    /**
     * Display the specified resource.
     */
    public function show($id): JsonResponse
    {
        $sportingGoods = $this->sportingGoods->with('category')->findOrFail($id);
        return response()->json($sportingGoods, Response::HTTP_OK);
    }

  
    public function update(UpdateSportingGoodsRequest $request, $id): JsonResponse
    {
        $sportingGoods = $this->sportingGoods->with('category')->findOrFail($id);
        $data = $request->validated();

        if ($request->hasFile('image')){
            try{
                $image_name = explode('sportingGoods/', $sportingGoods['image']);
                Storage::disk('public')->delete('sportingGoods/'.$image_name[1]);
            } catch(Throwable){
            }finally{
                $path = $request->file('image')->store('sportingGoods', 'public');
                $data['image'] = url('storage/'.$path);
            }
        }

        $sportingGoods->update($data);
        
        return response()->json($sportingGoods, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id): JsonResponse
    {
        $sportingGoods = $this->sportingGoods->findOrFail($id);
        $sportingGoods->delete();

        return response()->json(['Message' => 'Article deleted successfully']);
    }
}
