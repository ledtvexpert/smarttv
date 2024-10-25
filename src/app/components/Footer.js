export default function Footer() {
  return (
<footer className="bg-gray-800 text-white">
  <div className="max-w-full mx-auto px-6 py-8">
    <div className="flex flex-col py-5">
      {/* <h2 className="text-2xl font-bold mb-4">Smart TV Solution</h2>
      <p className=" mb-4">At Smart TV Solution, we specialize in providing expert repair services for all types of LED and LCD televisions.</p> */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Our Services</h3>
          <ul className="space-y-1">
            <li><a href="#" className="text-gray-300 hover:text-white">LED TV Repair in Pune</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">LCD TV Repair Near Me</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Smart TV Repair Near Me</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">LED TV Technician</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Additional Services</h3>
          <ul className="space-y-1">
            <li><a href="#" className="text-gray-300 hover:text-white">Smart TV Service Near Me</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Smart TV Repair in Pune</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">LED TV Service Near Me</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">LED TV Repair Near Me</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Location Services</h3>
          <ul className="space-y-1">
            <li><a href="#" className="text-gray-300 hover:text-white">LED TV Repair in Kharadi</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">LCD TV Repair in Pune</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
          <ul className="space-y-1">
            <li><a href="#" className="text-gray-300 hover:text-white">Address: Smart TV Solution, Near doke talim, Nana peth, Pune. 411002.</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Contact: 8510922806</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Mail: info@smarttvexpert.in</a></li>
          </ul>
        </div>
      </div>
      <hr className="w-full border-gray-700 mb-4" />
    
      <p className="text-sm mt-4">&copy; 2024 smart tv solutions. All rights reserved. | Design And Developed By Digimedia</p>
    </div>
  </div>
</footer>


  );
}
