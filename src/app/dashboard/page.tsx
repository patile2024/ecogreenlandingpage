import RootLayout from '@/app/components/Layout';
import Image from 'next/image';
import React from 'react';

const Home = () => {
  return (
    <div className="conatiner mt-5 text-gray-500 text-sm">
      <div className="">
        <Image width={'2000'} height={1000} src="/icons/1.png" alt={''} objectFit='contain' />
      </div>
      <div className="flex p-5">
        <Image width={'500'} height={100} src="/icons/2.jpg.png" alt={''} />
        <div className="p-3 bg-slate-300 flex flex-col gap-2">
          <p className="text-base text-blue-800"> CÁC TIÊU CHÍ TẠI ECOGREEN CITY </p>
          <p className="text-sm ml-5">Ecogreen City: Dự án đô thị xanh tiên phong.</p>
          <p className="text-sm ml-5">Vị trí: nằm trong khu vực phát triển mới của thành phố</p>
          <p className="text-sm ml-5">Mục tiêu: Tạo ra một môi trường sống bền vững và thân thiện với môi trường</p>
          <p className="text-sm ml-5">Tầm nhìn: Dự án đô thị xanh tiên phong.</p>
          <p className="text-sm ml-5">Tiêu chuẩn xanh: Dự án đô thị xanh tiên phong.</p>
          <p className="text-sm ml-5">Sứ mệnh: Dự án đô thị xanh tiên phong.</p>
        </div>
        <div className="flex flex-col gap-3 ml-20">
          <div className="border p-2 rounded-tl-3xl rounded-br-3xl">
            <p className="text-sm">THÔNG TIN ECROGREEN CITY</p>
          </div>
          <div className="border p-2 rounded-tl-3xl rounded-br-3xl">
            <p className="text-sm">THÔNG TIN ECROGREEN CITY</p>
          </div>
          <div className="border p-2 rounded-tl-3xl rounded-br-3xl">
            <p className="text-sm">THÔNG TIN ECROGREEN CITY</p>
          </div>
          <div className="border p-2 rounded-tl-3xl rounded-br-3xl">
            <p className="text-sm">THÔNG TIN ECROGREEN CITY</p>
          </div>
          <div className="border p-2 rounded-tl-3xl rounded-br-3xl">
            <p className="text-sm">THÔNG TIN ECROGREEN CITY</p>
          </div>
          <div className="border p-2 rounded-tl-3xl rounded-br-3xl">
            <p className="text-sm">THÔNG TIN ECROGREEN CITY</p>
          </div>
        </div>
      </div>
      <p className="text-cyan-600 ml-5">GIỚI THIỆU VỀ ECOGREEN CITY</p>
      <hr className="w-60 ml-5 h-0.5 bg-white-100 border-0 rounded md:my-1 dark:bg-cyan-600" />
      <div className="ml-5 mt-5">
        <p>Ecogreen City là một dự án đô thị xanh tiên phong, được tọa lạc tại vị trí chiến lược trong khu vực phát triển mới của thành phố. Mục tiêu của chúng tôi là tạo ra một môi trường sống bền vững và thân thiện với môi trường, cung cấp cho cư dân một cuộc sống lý tưởng và an lành.</p>
        <p className="text-green-600">Ecogreen City không chỉ là một khu đô thị, mà còn là một cộng đồng có tầm nhìn cao về bảo vệ môi trường và phát triển bền vững. Với tiêu chuẩn xanh hàng đầu và các tiện ích cộng đồng hoàn hảo, chúng tôi cam kết tạo ra một môi trường sống chất lượng và hạnh phúc cho mọi cư dân.</p>
      </div>
      <div className="flex justify-center mt-5">
        <Image width={'700'} height={100} src="/icons/3.jpg.png" alt={''} />
      </div>
      <p className="m-5">Dự án <span className="text-green-700">EcoGreen CITY</span> ĐƯỜNG NGUYỄN XIỂN , TÂN TRIỀU THANH TRÌ HÀ NỘI LÀ LOẠI CĂN HỘ VÀ ĐƯỢC ĐƯA VÀO SỬ DỤNG THÁNG 9/2017 TỔNG 35 TẦNG VỚI TỔNG DIỆN TÍCH 20.234 M^2</p>
      <div className="flex m-5">
        <Image width={'1000'} height={100} src="/icons/4.jpg.png" alt={''} />
      </div>
      <div className="m-5">
        <p className="text-green-700">TỔNG QUAN DỰ ÁN:</p>
        <p><span className="text-blue-600">►</span> Tên dự án: Eco Green CITY</p>
        <p><span className="text-blue-600">►</span> Vị trí: 286 Đường Nguyễn Xiển , xã Tân Triều , Thanh Trì , Hà Nội</p>
        <p><span className="text-blue-600">►</span> Chủ đầu tư: Công ty TNHH bất động sản và Xây dựng Việt Hưng</p>
        <p><span className="text-blue-600">►</span> Tiện ích: Hồ bơi rộng 5500m2, TTTM, Rạp chiếu phim, Hồ cảnh quan, Công viên nội khu 4ha, GYM, Yoga, BBQ...</p>
        <p><span className="text-blue-600">►</span> Quy mô:  Cao 35 tầng, trong đó có: 2 tầng hầm, 2 tầng shophouse + officetel: 200 căn. Căn hô từ tầng 4–35</p>
        <p><span className="text-blue-600">►</span> Tổng số căn hộ: 4.000 căn, Các loại thiết kế căn hộ: 52m2, 65m2, 75m2, 80m2, 86m2, 95m2, 119m2, Diện tích căn hộ Officetel: 25m2, 30m2, 35m2</p>
      </div>
      <div className="flex flex-col gap-1 items-center">
        <p className="text-green-700">VIDEO GIỚI THIỆU DỰ ÁN ECO GREEN CITY:</p>
        <Image width={'600'} height={100} src="/icons/5.jpg.png" alt={''} />
        <p className="text-sm text-gray-500">Video giới thiệu Căn hộ đã bàn giao Eco Green</p>
      </div>
      <div className="m-5">
        <p className="text-green-700">GIỚI THIỆU CHỦ ĐẦU TƯ XUÂN MAI CORP</p>
        <p className="bg-green-200 border pl-8 pr-6 text-gray-500">Trải qua hơn 30 năm xây dựng và phát triển với những thay đổi thăng trầm qua thời gian, Công ty đã phát triển lớn mạnh toàn diện, ngày càng khẳng định được năng lực, uy tín, vị thế trên thị trường xây dựng với rất nhiều dự án
          BĐS trọng điểm ở Hà Nội như: chung cư Xuân Mai Complex, Xuân Mai Riverside, Xuân Mai Mễ Trì Plaza, Xuân Mai Tower, Xuân Mai Sparks Tower, chung cư Hà Nội Paragon....
          Nhờ vào kinh nghiệm nhiều năm nghiên cứu và ứng dụng, Xuân Mai hiện là đơn vị hàng đầu tại về việc áp dụng công nghệ này trong thiết kế, sản xuất cấu kiện và thi công các công trình xử dụng cấu kiện bê tông dự ứng lực tiền chế
          tại Việt Nam đã áp dụng cho dự án chung cư Eco Green City, Eco Dream City. Công ty vẫn luôn chú trọng đến việc đầu tư và nghiên cứu ứng dụng các công nghệ tiên tiến trên thế giới, nỗ lực không ngừng mới mục tiêu trở thành
          Tổng thầu EPC hàng đầu và Nhà phát triển bất động sản uy tín.
          <span className="text-black">Eco Green Quận 7</span> là dự án thứ 2 Xuân Mai Corp đầu tư và xây dựng tại TP.HCM. Với quy mô rất lớn cùng với các tiện ích và chất lượng ưu Việt. Đây hứa hẹn sẽ là một sản phẩm tiên phong, khẳng định thương hiệu và vị thế của
          Xuân Mai Corp trên thị trường bất động sản miền Nam.</p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Image width={'600'} height={100} src="/icons/6.jpg.png" alt={''} />
        <p className="text-sm text-gray-500">Tổng hợp các dự án căn hộ chủ đầu tư Xuân Mai đã thực hiện</p>

      </div>
      <p className="text-cyan-600 ml-5 mt-10">ĐỊA CHỈ ECOGREEN Ở ĐÂU</p>
      <hr className="w-60 ml-5 h-0.5 bg-white-100 border rounded md:my-1" />
      <div className="flex columns-2">
        <div className="m-5 w-full">
          <p className="text-blue-900">Vị trí Căn hộ Eco Green City ở đâu</p>
          <ul className="list-disc ml-5">
            <li> Dự án Eco Green City tọa lạc số 286 Đường Nguyễn Xiển , xã Tân Triều , Thanh Trì , Hà Nội. Nằm dọc theo đường vành đai 3. Vị trí của dự án được các chuyên gia & giới đầu tư đánh giá rất cao vì vị thế tiềm năng phát triển & khả năng tăng giá cao trong tương lai.</li>
            <li>Dự án Eco Green City tại Hà Nội  dễ dàng tiếp cận được các tuyến đường chính và hệ thống giao thông công cộng, giúp cư dân di chuyển thuận tiện đến mọi nơi trong và ngoài thành phố.</li>
          </ul>
        </div>
        <div className="w-full">
          <Image width={'600'} height={100} src="/icons/7.png" alt={''} />
        </div>
      </div>
      <div className="ml-5 flex flex-col">
        <p className="text-green-500">Liên kết khu vực của Eco Green City như thế nào?</p>
        <Image width={'1000'} height={100} src="/icons/8.png" alt={''} />
        <p className="text-gray-500 text-sm mt-5 text-center">Với vị trí đắc địa vốn có, Cư dân sống tại Dự án Eco Green City được thụ hưởng toàn bộ hệ thống tiện ích hiện đại </p>
        <p className="text-gray-500 text-sm mt-5">Trung tâm Thương mại: khu Cresen mall, siêu thị Coop Mart, khu Parkson Paragon, khu mua sắm Vivo City, chợ Tân Mỹ...</p>
        <p className="text-gray-500 text-sm">Cơ sở Y tế: Bệnh viện quốc tế Pháp Việt, bệnh viện Tâm Đức, bệnh viện đa khoa quận 7…</p>
        <p className="text-gray-500 text-sm">Cơ sở Giáo dục: Trường mầm non, Trường cấp 1-2-3, ĐH Tôn Đức Thắng, ĐH Marketing, ĐH RMIT, CĐ Quản trị doanh nghiệp, trường đại học Cảnh Sát…</p>
        <p className="text-gray-500 text-sm mb-5">Trung tâm giải trí và thể thao: Liền kề Công viên Hương Tràm rộng 22 hecta, hồ Bán Nguyệt, cầu Ánh Sao, sân Golf Phú Mỹ Hưng, sân tenis, rạp chiếu phim tại Cresen mall, Parkson, Vivo city…</p>
        <Image width={'1000'} height={100} src="/icons/9.jpg.png" alt={''} />
      </div>
      <p className="text-gray-500 text-sm ml-5 italic">Tiện ích xung quanh dự án Eco Green City</p>
      <div className="flex flex-col m-5 gap-2">
        <p className="text-cyan-600 ml-5 mt-10">Tiện ích tại Ecogreen city</p>
        <hr className="w-60 ml-5 h-0.5 bg-white-100 border rounded md:my-1" />
        <div  className="flex justify-center">
          <Image width={'1000'} height={100} src="/icons/10.jpg.png" alt={''}/>
        </div>
        <p className="text-gray-500">Dự án duy nhất tại <span className="text-black">Chung cư Eco Green</span> có 2 công viên lớn. Công viên nội khu 3.5 Héc ta ( 35.000m2) và công viên Hương Tràm 22 Héc ta ngay cạnh dự án. </p>
        <Image width={'1600'} height={100} src="/icons/3.jpg.png" alt={''}/>
        <p className="text-gray-500">Khách sạn cao cấp Park Hyatt cao 68 tầng nằm trong tổng thể <span className="text-black">Chung cư Eco Green Sài Gòn</span>, Trung tâm thương mại 6 tầng ngay tầng dưới.</p>
        <Image width={'1000'} height={100} src="/icons/diboi.png" alt={''}/>
        <p>Hồ bơi 500m2 riêng cho từng Block Căn hộ.</p>
        <Image width={'1000'} height={100} src="/icons/11.png" alt={''}/>
        <p>Khu tiện ích ở tầng 3 dự án gồm tất cả các tiện ích phục vụ nhu cầu thiết yếu của cư dân Eco Green. Với tổng diện tích toàn khu hơn 14ha, nhưng mật độ xây dựng chỉ chiếm khoảng 24%, diện tích còn lại sẽ dành để hoàn thiện cho hơn 39 tiện ích nội khu cao cấp và không gian xanh của thiên nhiên, cây trồng.</p>
        <div className="flex flex-col items-center justify-center">
          <Image width={'1200'} height={100} src="/icons/12.jpg.png" alt={''}/>
          <p>Về giáo dục, Ngay trong khuôn viên của dự án sẽ có Trường mầm non rộng gần 3.000m2 và Trường Tiểu học Kim Đồng đạt chuẩn quốc gia, đáp ứng tốt nhất nhu cầu học tập của con trẻ</p>
        </div>
        <div className="flex flex-col m-5">
          <Image width={'1200'} height={100} src="/icons/14.png" alt={''}/>
          <p>Trung tâm thương mại và khách sạn cao cấp được xây dựng trên diện tích 30.000m2 sẽ là nơi tuyệt vời để cư dân thỏa thích thăm quan mua sắm lựa chọn cho mình những sản phẩm yêu thích, thỏa mãn nhu cầu ăn uống, mua quần ào, đồ dùng, hàng hiệu</p>
        </div>
      </div>
      
    </div>
  )
};

Home.getLayout = (page: React.ReactNode) => {
  return <RootLayout>{page}</RootLayout>;
};

export default Home;