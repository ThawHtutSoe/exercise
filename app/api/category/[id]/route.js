import Category from "@/models/Category";


export async function GET(request, { params }) {
    const id = params.id;
    const category = await Category.findById(id)
    return Response.json(category);
} 

export async function POST(request) {
  const body = await request.json()
  const category = new Category(body)
  await category.save()
  return Response.json(category)
}




