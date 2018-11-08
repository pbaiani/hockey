<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;

class UploadController extends Controller
    {
    public function UploadLeagueImage(Request $request)  {
        $file = $request->filepond;
        if(!$file) {
            return response()->json([‘upload_file_not_found’], 400);
        }
      
        if(!$file) {
            return response()->json([‘invalid_file_upload’], 400);
        }
         $path = public_path() . "./uploads/leagueImages";
         $file->move($path, $file->getClientOriginalName());
     
     }

    
}