import { createClient } from "@supabase/supabase-js"
import { useState } from "react"


const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpdnpyZHJ3cndtZW1pd3hjYm5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzNzQ3NjQsImV4cCI6MjA1Nzk1MDc2NH0.GCTawtI0XKEs58eryZ1QJXlf_GTNH6u4vzPjA6yEqg0`



const url = "https://pivzrdrwrwmemiwxcbnf.supabase.co"


export default function FilleUploadTest() {
    const [file, setFile] = useState(null)

    async function handleUpload() {
        if (File == null) {
            alert("please select a file")
            return
        }
        console.log(File)
        let  fileName = file.name
        const extension = fileName.split(".")[fileName.split(".").length - 1]

        if (extension != "jpg" && extension != "png") {
            alert("Please select a jpg orpng file")
            return
        }


        console.supabase = createClient(url, key)

        const timestamp=new Data ().getTime ()
         fileName = timestamp+"."+extension
         console.log(fileName)

        await supabase.storage.from("images").upload( fileName, file, {
            cashecontral: "3600",
            upsert: false
        })


        const url2 = supabase.storage.from("images").getPubliceUrl( fileName).then((res)=>{
            console.log(res)
        })
    }

    return (
        <div>
            <h1> FileUploadTest</h1>
            <input type="file" onChange={(e) => {
                setFile(e.target.files[0])
            }}
            />
            <button onClick={handleUpload}>Upload</button>
        </div>
    )
}
