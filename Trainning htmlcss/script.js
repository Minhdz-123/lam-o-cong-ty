console.log("oke");


document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      img: "vinhomes-ocean.jpeg",
      title: "Vinhomes Ocean Park",
      location: "Hưng Yên",
      price: "AirBnB 5-7 tỉ"
    },
    {
      img: "vinhomes-smart.jpeg",
      title: "Vinhomes Smart City",
      location: "Tây Mỗ, Hà Nội",
      price: "Tổng vốn góp 1-2 tỉ"
    },
    {
      img: "hinode-royal.jpeg",
      title: "HINODE Royal Park",
      location: "Hoài Đức, Hà Nội",
      price: "Tổng vốn góp 8-10 tỉ"
    }
  ];
  const services = [
    {
      title: "phuong thuc tiep can",
      sub: "Phân tích mục tiêu, vốn và kế hoạch đầu tư phù hợp"
    },
    {
      title: "Quy trinh",
      sub: "Kiểm tra tài chính, khuyến nghị đầu tư, chọn gói đầu tư phù hợp đồng hành trong mọi quá trình"
    },
    {
      title: "Dich vu",
      sub: "Tư vấn tài chính, giao dịch, tối ưu hóa lợi nhuận và chuyển nhượng"
    },
    {
      title: "Thu phi",
      sub: "Thu phí theo hiệu suất tạo ra khi hoàn thành"
    },
    {
      title: "Cam ket",
      sub: "Đồng hành xuyên suốt quá trình đầu tư đến khi bán ra"
    },
    {
      title: "Rui ro",
      sub: "Lên kế hoạch giảm thiểu rủi ro và tối ưu hóa lợi nhuận, chỉ thu phí khi tạo ra lợi nhuận"
    },
    {
      title: "Chi phí đầu tư",
      sub: "Gói đầu tư linh hoạt, nhà đầu tư có thể bắt đầu với gói đầu tư cơ bản chỉ từ 100 triệu đồng"
    },
  ];

  const in4 = [
    {
      title: "30 ti",
      des: "Tiền đầu tư dự án",
      sub: "Số tiền đầu tư đã triển khai và thực hiện dự án trong năm 2024"
    },
    {
      title: "5 du an lon",
      des: "3 huyen thanh",
      sub: "Nắm bắt cơ hội đầu tư từ những biến đổi thị trường"
    },
    {
      title: "3 loai hinh",
      des: "da dang kinh doanh dong tien",
      sub: "Phát triển dòng tiền từ hoạt động cho thuê, AirBnb, Resort để tối ưu hóa lợi nhuận"
    }

  ];

 const inforThiTruong = [
  {
    img: "section7-image-1.webp",
    sub: "Đất nền ngoại thành Hà Nội “tan băng”"
  },
  {
    img: "section7-image-2.webp",
    sub: "Đang ở thuê, có nên vay để đầu tư nhà ngoại thành?"
  },
  {
    img: "section7-image-3.webp",
    sub: "Xu hướng đầu tư vào bất động sản sở hữu giá trị thực"
  },
  {
    img: "section7-image-4.webp",
    sub: "Bất động sản đang đứng đầu về lợi suất đầu tư"
  },
  {
    img: "section7-image-5.webp",
    sub: "Các phân khúc bất động sản hút nhà đầu tư ngoại"
  }
];




  function renderList(props) {
    const { data, containerSelector, type } = props

    const container = document.querySelector(containerSelector);
    if (!container) return;

    data.forEach(item => {
      const card = document.createElement('div');

      if (type === "project") {
        card.classList.add('card');
        card.innerHTML = `
        <div class="image">
          <img src="images/${item.img}" alt="${item.title}">
          <h3>${item.title}</h3>
          <p><i class="fa fa-map-marker"></i> ${item.location}</p>
          <p>${item.price}</p>
          </div>
        `;

      }
      else if (type === "service") {
        card.classList.add('card');
        card.innerHTML = `
          <h3>${item.title}</h3>
          <p>${item.sub}</p>
        `;
      } else if (type === 'button') {
        card.classList.add('button');

        card.innerHTML = `
          <h3>${item.title}</h3>
        `;
      } else if (type === 'in4') {
        card.classList.add('card');
        card.innerHTML = `
          <h3>${item.title}</h3>
          <p>${item.des}</p>
          <p>${item.sub}</p>
        `;
      }
      else if (type === "inforThiTruong") {
        card.classList.add("card");
        card.innerHTML = `
    <div class="image">
      <img src="images/${item.img}" alt="${item.sub}">
      <h3>${item.sub}</h3>
    </div>
  `;
      }


      console.log(card);


      container.appendChild(card);
    });
  }
  renderList({
    data: projects,
    containerSelector: ".slider",
    type: 'project'
  });
  renderList({
    data: services,
    containerSelector: ".service-list",
    type: "service"
  });
  renderList({
    data: services,
    containerSelector: ".button-list",
    type: 'button'
  })
  renderList({
    data: in4,
    containerSelector: ".in4-list",
    type: 'in4'
  })
  renderList({
    data: inforThiTruong,
    containerSelector: ".inforThiTruong-list",
    type: "inforThiTruong"
  });

  const buttons = document.querySelectorAll(".button-list .button");
  const serviceCards = document.querySelectorAll(".service-list .card");

  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      serviceCards.forEach(card => card.classList.remove("center"));

      const selectedCard = serviceCards[index];
      selectedCard.classList.add("center");

      selectedCard.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });

      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

});

let LastScrollTop = 0;
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  const currentScroll = window.pageXOffset || document.documentElement.scrollTop;
  if (currentScroll > LastScrollTop || screenTop > 100) {
    navbar.classList.add('hide');
  } else {
    navbar.classList.remove('hide');
  }
  LastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

}
);


