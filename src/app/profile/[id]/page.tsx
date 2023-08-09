export default function UserProfile({params}:any){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>user Profile</h1>
            <h1 className="text-4xl">
                Profile Page  Id<span className="p-1 ml-2 text-black bg-orange-700"> {params.id}</span>
            </h1>

        </div>
    )
}