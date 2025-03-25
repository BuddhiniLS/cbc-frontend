const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpdnpyZHJ3cndtZW1pd3hjYm5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzNzQ3NjQsImV4cCI6MjA1Nzk1MDc2NH0.GCTawtI0XKEs58eryZ1QJXlf_GTNH6u4vzPjA6yEqg0`


const url = "https://pivzrdrwrwmemiwxcbnf.supabase.co"

import { createClient } from '@supabase/supabase-js';


const supabase = createClient(url, key);

export default function uploadMediaToSupabase(file) {
  return new Promise((resolve, reject) => {
    if (file == null) {
      reject("File not added");
    }
    let fileName = file.name;
    const extension = fileName.split(".")[fileName.split(".").length - 1];

    const timestamp = new Date().getTime();

    fileName = timestamp +  file.name + "." + extension;

    supabase.storage.from("images").upload(fileName, file, {
      cacheControl: "3600",
      upsert: false,
    }).then(() => {

      const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
      resolve(publicUrl);
    }).catch((err) => {
      reject(err);
    });
  });
}




