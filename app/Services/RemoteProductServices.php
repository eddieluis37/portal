<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class RemoteProductService
{
    public function fetchProducts()
    {
        $cfg     = config('services.remote_products');
        $response = Http::withHeaders([
            'X-API-KEY' => $cfg['api_key'],
        ])->get($cfg['base_uri'] . '/api/products');

        if ($response->successful()) {
            return $response->json()['data'];
        }

        throw new \Exception("Error obteniendo productos: {$response->status()}");
    }
}
