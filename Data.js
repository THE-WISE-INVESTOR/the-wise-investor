const Pr = require("./server/database-mongo/pr.model");
const ProfileBlog = require("./server/database-mongo/profile");
var project = [
  {
    image:
      "https://expertphotography.b-cdn.net/wp-content/uploads/2011/11/photography-beginners-image1.jpg",
    title: "Photographer",
    budget: 1000,
    field: "Photography",
    tutorial: `The advent of digital photography has led to an explosion in photography, both as a creative art form and as a career choice as well. The basics of becoming a photographer are incredibly easy now; You can buy a camera and some equipment, learn photography from a multitude of free online photography courses, practice your photography skills, find a niche that you can focus on. You can indeed find your own answers to the question - how to become a professional photographer.However, though it sounds easy, the truth is not that simple. Photography is an extremely competitive field that requires you to have talent, skills, marketing acumen and discipline to make your mark as a professional photographer. To be successful, professional photographers need to not just be talented; they also need the tenacity to put in long hours, compete hard due to supply-demand imbalance and manage their business as an entrepreneur.  Here is an extensive collection of great photography website templates for your reference. 

     How much do photographers earn?
    Professional photographers earn a median pay of $34,000 per year / $16.35 per hour
    Source: 2018 figures by the U.S. Bureau of Labor Statistics
    
    
    While you can earn much more as a photographer, based on your talent, skills, portfolio, and business acumen, it would be wise to make sure that it's your passion and love for photography that's driving your decision to go down the path of becoming a professional photographer.
    
    Once you have figured out what motivates you and decided on taking up photography as a career, it's time to start looking into the big question on 'how to become a professional photographer.'
    
    In this comprehensive guide, we have covered all the aspects and steps that you would need to take to complete your journey from a hobbyist/amateur photographer to becoming a professional photographer:
    
    Here is a 15 step guide on how to become a professional photographer:
    1. Start by asking the right questions:
    Professional photography can be an excellent choice for a career if you can manage the right balance between your creative passion and entrepreneurial instincts. Just like starting any other business, put together a list of questions that you need to answer for yourself before you begin your photography career, set goals and think about how to be a good photographer.
    
    What motivates me?
    Am I prepared to start small and persevere alone?
    Can I work alone as a photography professional?
    Which photography speciality niche excites me?
    What are the gaps that I can fulfil in my local area?
    How do I improve my skills?
    What value would I offer to my clients?
    2. Find a photography mentor
    You would find the answers to most of your questions on how to become a good photographer through research, both online and offline. Go to photography talks, exhibitions, and seminars. You would meet a lot of photographers at these events, and you can get a lot of answers directly from them. There are a number of online photography communities that you can become a member of. Some of the answers that you seek will come from structured education, and some answers will only come with experience and time.
    
    Tip: Find a professional photographer to mentor you. Help him out in his assignments and begin learning the basics of photography business from him.
    3. Get the right photography education
    
    Professional Photography is one of the very few fields where structured training is not a prerequisite. You can self-learn, practice, and improve your skills without going to a formal educational institute. However, it can add a lot of value to your career, skills, and experience as a professional photographer.
    
    A lot of professional photographers have taken photography courses at top photography schools, universities, or design institutes. Besides a formal course of instruction to develop their skill sets, a photographer should have a keen eye, oodles of creativity, and technical ability. We have listed a few simple steps to get you started.
    
    
    Choose wisely from the many Photography Courses available.
    
    A wide range of photography courses from Photography Certificate programs to Masters level courses is available.
    
    The Certificate Photography programs can be completed in a few months. They help students learn essential skills and knowledge in photography. These programs cover the basics of:
    
    Fundamentals of photography.
    Principles of Digital photography, how to use Photography software, and image manipulation techniques.
    History of photography and foundation of film photography
    The Associate Degree in Photography is offered in various Art Schools, Colleges, and Universities. The Associate Degree course typically lasts for two years. The curriculum is technical and prepares students to learn the different types of photography and use various techniques – from transparency and negative films to working in a natural setting. Students also learn to acquire skills for making photographs in a studio.
    
    The Bachelor of Fine Arts in Photography is typically a four-year course available at a University or College. The course includes in-depth curricula and supporting coursework. It entails a study of the fundamentals of photography, digital and film photography, its narratives, history, and techniques. The course also teaches understanding imagery in Editorial, Advertising, and Fine art photography. And, this guide will walk you through some of the   fruit-producing tips and tricks editorial photography.
    
    The Master's Degree in Photography or Master of Fine Arts prepares students to explore theory and gain essential practical experience. The Master's Course is available for students who have completed the Bachelor's Program.
    
    Online Photography Courses
    If you are currently employed full-time, you can choose from a range of Online Photography Courses that will give you a good understanding of the basics. While the really good ones are paid, there are several free online photography courses also available. You can take up these courses in your free time and improve your skills. You can also join photography workshops during weekends to build your portfolio, which would become a base in your journey as a professional photographer. 
    
    Read career guides on 'How to become a professional photographer?' or 'How to get into photography?.'
    There is ample information available on photography blogs and podcasts to get an understanding of the basics of photography – composition, aperture, shutter speed, ISO settings, depth, white balance, etc... You can always learn additional skills in lighting, posing, equipment, flash, and improve your editing skills as you go along. Start small and then begin working on your images using photo editors. Gradually you will learn the art of perfecting your pictures using settings in professional editing software.
    
    4. Do a Photography Internship with a Professional Photographer
    
    If you're a young, budding photographer, look out and network with other professional photographers and mentors. It is very important to develop your 'people skills'. Good communication, flexibility, and a patient demeanor are as important as developing your technical skills as a professional photographer.  Never shy away from getting feedback about your work. You are eventually going to make a living based on the quality of your working.   Here is an example of best wedding website templates you can check.
    
    Look out for vacancies and get a photography job as an intern or an Assistant to gain hands-on experience that no university or school can teach. The key is to get professional photography experience by applying the knowledge and skill-sets that you have learned in the real world. During your internship, focus on learning how a photography business is run and how to deal with clients`,
  },
  {
    image:
      "https://i.pinimg.com/originals/a0/98/ae/a098ae1b4e6d49b4697f3fcaea331c34.jpg",
    title: "Photography Studio",
    budget: 7000,
    field: "Photography",
    tutorial: `Do you have a photography business and are looking to move to the next level? The best businesses are always looking at ways to improve, and adopting better processes to generate more revenue.

        Setting up your own photography studio is a significant investment. If you are at the stage where your business defines your brand personality, then this article is for you. It explains how to set up your own photography studio, which will then give you complete control of your photography work process. Besides, it also eliminates the heavy costs you incur while preparing for a shoot in a rented professional studio. Peerspace charges $100 per hour for a studio rental while other places may charge several hundreds of dollars. 
        
        Having a studio of your own frees up your imagination from standard settings and lets you stand out from the competition. In this article, we will talk about everything that you need to know to build your first photography studio.
        
        Tips to set up home photography studio
        Where Should your Photo Studio be Located?
        Deciding where to build your studio depends upon your client list. If you are a portrait photographer, whose clientele consists of local families, then a local place would suffice. However, if you mainly do product or fashion photography, your business is better off situated near the city center. 
        
        
        Studio costs could also be an inhibiting factor. The cost of office space is inversely proportional to the distance of your studio from the town’s commercial center. You may be able to acquire a more substantial area with more parking and open views for less money uptown. If you absolutely need to be in midtown, living, and working out of home is an option you could explore. You must also include the cost of insurance into the studio investment. If you are strapped for money and on a budget, onsir turning your living area into a home photography studio

It is advisable to undertake a recce of locations and find out prevailing rents in prospective studio locations. Make sure that your transport and scaling-up costs are also factored in. You should estimate the potential revenue you stand to earn with a professional studio. Survey other the rates charged by other photographers in your field and attempt to estimate the value a studio would bring to your work. 

Be brutally honest in your self-assessment, and don’t be afraid to ask for opinions from among your peers. If you find the worth of your work lacking in quality, you should first work on filling the gaps in your skill sets.

Interior Design Matters
Once you’ve settled on a location for your photo studio, you should move on to estimating the cost of repairs and renovations that the place would require. Assess the areas in which you specialize and consider the physical space that you have available.

"Different sizes of space are applied to different types of home photography studios. And that means you need to measure your space and the genre of your studio photography (size of subjects) ahead of time." ~ Dylan Yu, Katebackdrop 

Read more: How Much Space Do You Need For Photo Studio?

`,
  },
  {
    image:
      "https://www.treehugger.com/thmb/w5ao9L7F3KzegXa0NXnpkyLUvCQ=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2019__07__commercial_car_wash-1d8498e0ea964ffc91eeab5b48c1265b.jpg",
    title: "Car wash",
    budget: 5000,
    field: "Mecanichal",
    tutorial: `Executive Summary 
        Opportunity
        Problem
        East Meadow long island and its surrounding area is quite affluent, 40% of the residents earn over $70,000 a year. Consequently, they have nice cars and want them to look nice. There are five different car dealerships within a three-mile radius which will require car washing services for the various fleets. Lastly, there are many different local businesses that have company cars and that require clean appearances.  All of these potential customers need a car wash that fits their needs and their budget. e wi happily fill that need.
        
        Solution
        Soapy Rides will be providing customers with three services: exterior car washing, interior cleaning, and detailing. Soapy Rides has no true competitors that are trying to offer a high quality service for a reasonable rate
        
        Market
        This area has a number of benefits in terms of the market that it will provide for the business. Over 40% of households in the immediate neighborhood earn over $70,000 annually. Many people in the neighborhood own and/or lease new cars and place great value on their cars and how they look. There are a large number of car dealerships in the area–five within three miles of the proposed location for Soapy Rides.
        
        Competition
        There is one other hand car wash shop in East Meadow. It is quite new and is trying to compete with automatic car washes by offering low prices. However, it is not targeting the customers who seek quality cleaning.
        
        Why Us?
        Soapy Rides will be providing customers with three services: exterior car washing, , interior cleaning, and detailing. Soapy Rides has no true competitors that are trying to offer a high quality service for a reasonable rate.
        
        Expectations
        Forecast
        The business will be initially financed by a personal investment by Mark Deshpande and will finance growth through cash flow. This will mean that the company will grow more slowly than it could, but it will ensure that Mark retains control over the direction of the company. In year three, it is hoped that the company will be able to open a second location. It is envisioned that an outside loan or equity funding will be sought at that time.
        
        `,
  },
  {
    image:
      "https://www.autotrainingcentre.com/wp-content/uploads/2015/09/Top-5-Most-Common-Repairs-Youll-Encounter-in-an-Auto-Repair-Career.jpg",
    title: "Auto repair ",
    budget: 1200,
    field: "Mecanichal",
    tutorial: `Start a car repair shop by following these 10 steps:
        Plan your Car Repair Shop
        Form your Car Repair Shop into a Legal Entity
        Register your Car Repair Shop for Taxes
        Open a Business Bank Account & Credit Card
        Set up Accounting for your Car Repair Shop
        Get the Necessary Permits & Licenses for your Car Repair Shop
        Get Car Repair Shop Insurance
        Define your Car Repair Shop Brand
        Create your Car Repair Shop Website
        Set up your Business Phone System
        You have found the perfect business idea, and now you are ready to take the next step. There is more to starting a business than just registering it with the state. We have put together this simple guide to starting your car repair shop. These steps will ensure that your new business is well planned out, registered properly and legally compliant.
        
        STEP 1: Plan your business
        A clear plan is essential for success as an entrepreneur. It will help you map out the specifics of your business and discover some unknowns. A few important topics to consider are:
        
        What are the startup and ongoing costs?
        Who is your target market?
        How much can you charge customers?
        What will you name your business?
        Luckily we have done a lot of this research for you.
        
        What are the costs involved in opening a car repair shop?
        Costs for starting a shop vary, but generally include:
        
        Business license: $50 to $100.
        ASE certifications: $36 registration fee, one time, plus $39 per certification, except L1, L2, and L3 certs which are $78.
        Insurance: $4,000/yr.
        Mechanic’s hydraulic lift: $3,700.
        Diagnostic machine: $5,000 to $10,000.
        Shop rental fees: $1,500 to $15,000/mo.
        Mechanic’s tool set with specialty tools: $15,000.
        Total Cost: $50,000+
        What are the ongoing expenses for a car repair shop?
        Ongoing expenses for the business include shop rental (unless the business owner owns the shop building), insurance, and labor costs.
        
        Mechanics can be paid anywhere from $25 flat rate per hour up to $100 per hour.
        
        Insurance can cost shop owners $4,000 per year.
        
        Overhead and supply costs vary, but may cost a shop between $10,000 and $20,000 per month, depending on the size of the shop.
        
        Who is the target market?
        Clients for auto repair businesses are unique in that they all have one thing in common: a broken or serviceable vehicle. The best types of customers are those with a service contract. Ongoing service contracts ensure steady income for the shop and reduce cash flow problems both in the short and long-term.
        
        The worst type of customers may be the one-time customers who take advantage of special discounts. These types of customers are price shoppers and may actually cost the shop money.
        
        How does a car repair shop make money?
        An auto body shop or car repair shop makes money by charging a flat fee or hourly rate for service. In some shops, owners set routine maintenance fees, charging a set price for simple maintenance like an oil change. In other shops, all work is based on parts and labor cost.
        
        How much can you charge customers?
        Labor rates vary depending on how the shop is set up. At a dealership, mechanics are paid differently than at an independent shop. One of the main factors in labor rates is location. Mechanics usually earn more in cities and areas where vehicles are more expensive to maintain (usually this means a high concentration of high-end or luxury vehicles).
        
        An independent shop usually charges customers between $70 and $100 per hour. Dealerships charge between $80 and $150 per hour.
        
        Some shops charge customers a flat fee for services, like routine maintenance (e.g. oil changes, brake changes, and tune ups).
        
        How much profit can a car repair shop make?
        According to US News, mechanics make between $30,000 and $50,000 per year. So, a one-man shop could expect to make around this much. The owner of a larger shop can easily make $100,000+ per year by managing a small team of mechanics.
        
        This article gives a percentage breakdown of costs vs. revenue. Of course, the exact percentage may vary depending on where your shop is located, whether or not you’ve specialized in some aspect of automotive repair, and the general market demand for your services.
        
        How can you make your business more profitable?
        Making the business more profitable isn’t easy. Owning a shop is hard work. Pulling in extra income is usually a matter of specialization. Converting a general auto repair shop into a transmission specialist, for example, would help increase profits due to the fact that the shop can charge customers more for specialized work. This is especially true if your shop is the only such specialty shop in the area.
        
        What will you name your business?
        Choosing the right name is important and challenging. If you don’t already have a name in mind, visit our How to Name a Business guide or get help brainstorming a name with our Car Repair Shop Name Generator
        
        If you operate a sole proprietorship, you might want to operate under a business name other than your own name. Visit our DBA guide to learn more.
        
        When registering a business name, we recommend researching your business name by checking:
        
        Your state's business records
        Federal and state trademark records
        Social media platforms
        Web domain availability.
        It's very important to secure your domain name before someone else does.`,
  },
  {
    image:
      "https://lifebeyondnumbers.b-cdn.net/wp-content/uploads/2013/11/why-need-personal-trainer-lifebeyondnumbers.jpg",
    title: "Personal coaching",
    budget: 0,
    field: "Sport",
    tutorial: `Steps to Becoming a Personal Trainer
        Step 1
        Earn a High School Diploma
        Most national certification programs only require a high school diploma or GED. You can get your GED for under $150 in most states, and it should only take about three months.
        
        Step 2
        Complete AED/CPR Certification
        Personal trainers must complete cardiopulmonary resuscitation (CPR) and automated external defibrillator (AED) certification programs. These programs teach trainers how to help a client in a medical emergency until a medical professional arrives.
        
        Nearly every national personal training certification organization requires AED and CPR certifications. They typically cost up to $55 and take about four hours to complete.
        
        Step 3
        Choose a Fitness Specialty
        Prospective trainers should choose a specialty that matches their skill sets, personal interests, and professional goals. Once you determine your specialization, review the various fitness certifying bodies and each of their fitness certifications. Choose the program that makes the most sense for you and your goals.
        
        Step 4
        Prepare for Certification
        The National Commission for Certifying Agencies (NCCA) is the primary accrediting body for personal training certifications. The major certifying bodies include:
        
        American College of Sports Medicine
        National Academy of Sports Medicine
        American Council on Exercise
        National Strength and Conditioning Association
        Once you choose the certification you want, you'll need to prepare for the exam. Most exams have practice questions you can run online, and there are also online prep courses. You should study hard and make sure you are confident when you register.
        
        Step 5
        Take and Pass Certification Examination
        Once you're feeling prepared, excited, and ready to become a personal trainer, it's time to register for your exam. Typically, this includes an application and your fee.
        
        The test will most likely be computer-based and include between 120-150 questions. The question amount and types will be similar but depend on the individual test. For example, the Certified Personal Trainer Certification from the National Academy of Sports Medicine (NASM) has questions across four sections:
        
        Program Planning
        Client Consultation and Fitness Assessment
        Exercise Techniques
        Safety/Emergency Issues
        Step 6
        Apply for Jobs and Build a Portfolio
        Now that you're qualified for positions in various fitness settings, it's up to you to decide the best fit. As a start, you can check the NASM and other fitness organizations for job postings. You can gain experience by working at your local gym and possibly shadowing an experienced trainer. Some new personal trainers opt to build a client roster on their own and work independently.
        
        Step 7
        Additional Education Options
        As the fitness field expands, you will need to continue learning and growing to stay competitive. Some ways to do that include:
        
        Taking courses at a career-focused school
        Enrolling in community college training or degree programs
        Taking external personal training courses
        Enrolling in a four-year university
        `,
  },
  {
    image: "https://www.california-gym.com/wp-content/uploads/2020/02/cun2.png",
    title: "GYM",
    budget: 3000,
    field: "Sport",
    tutorial: `Step 1: Find the Right Space
        Before you can start swinging kettlebells and performing burpees, you need to decide where you want to set up your home gym. At the very least, the space should have enough room for a yoga mat, which is all the space you'll need to stretch and do core exercises. From there, the exact space for your home gym will depend on how much room you have and the workouts you want to accomplish. A HIIT workout might need more space and a solid (but not-too-hard) surface to jump around on, while a yoga or Pilates workout needs a little more space than a yoga mat. A heavy lifting regimen featuring all the bells and whistles will likely require a whole room of its own.
        
        Apartment dwellers, if your living situation is bigger than the size of a walk-in closet (*cough* jealous *cough*), dedicate an unused corner of your living room or bedroom to your sweat sessions. An outdoor space like a roomy back porch or patio can work if your local climate and living situation permits it. And if you have a spare bedroom, empty office, or vacant garage that's begging to be used, you've hit the home gym jackpot.
        
        Step 2: Stock Your Home Gym
        You don't need a ton of equipment or bulky machines to make your home gym an effective place to exercise. In fact, some of the best home workout equipment is actually quite small and inexpensive.
        
        Cardio
        If you're tight on space and cash, save the money you'd spend on a bulky treadmill for your vacation fund and pick up a jump rope (Buy It, $16, amazon.com) for cardio instead. To crank up the intensity, use a weighted jump rope, which is a little bit heavier to turn, so your wrists and forearms will be working harder to keep it rotating, Pete McCall, personal trainer and host of podcast All About Fitness, previously told Shape. Still, treadmills can give you a serious burn and shouldn't be overlooked if you have the room in your home gym-and just love pounding the belt. These treadmills all cost less than $1,000, so you can hit your fitness goals and stay on budget.
   
        Strength
        And no need for gigantic cable machines to get a strength workout in. Instead, invest in a single kettlebell (Buy It, $70-425, kettlebellkings.com), a pair of adjustable dumbbells, an entire set of dumbbells, and/or a set of resistance bands, which give you the same muscle toning without the bulky storage concerns. While stability balls and BOSUs can be super useful in strengthening your core and improving balance, they can be tough to store. That's why balance discs (Buy It, $20, amazon.com), which take up as much space as a plate and offer the same benefits, work best for home gyms. (And don't ever underestimate the power of bodyweight moves.)
        
        Recovery
        No matter if you're #TeamStrength or #TeamCardio, recovery equipment is essential for your home gym. Fitness expert Ellen Barrett, star of the Ellen Barrett Live: Grace & Gusto DVD, loves foam rollers because they're so versatile-you can use them for 'kneading' out muscles, strengthening your core, or as a prop for yoga poses. In fact, research shows that regularly rolling out your muscles with a foam roller can help reduce muscle fatigue and soreness, speed up recovery, and enhance overall muscular performance. Aside from a hunk of foam, consider adding targeted recovery tools such as a Theragun (Buy It, $299, theragun.com), which works as vibration therapy, and a hot and cold foot roller (Buy It, $15, gaiam.com) to relieve sore and aching feet. 
        
        Remember, you don't have to buy everything for your home gym all at once. Start with a few key pieces and then gradually build up from there. You can save even more money by putting some items on your wish list for upcoming holidays or your birthday, shop at used sports stores or garage sales, scan Craigslist or Facebook Marketplace for pre-owned items, or swap out with friends to rotate your equipment for free. (Pro tip: Reddit's r/homegym subreddit has a community of 157,000 members who offer up genius ideas and set-up success stories.)`,
  },
  {
    image:
      "https://royalsportshop.com/wp-content/uploads/2019/07/IMG_20190730_100726-1030x773.jpg",
    title: "Shop of sport materials",
    budget: 3000,
    field: "Sport",
    tutorial: `Start a sporting goods store by following these 10 steps:
        Plan your Sporting Goods Store
        Form your Sporting Goods Store into a Legal Entity
        Register your Sporting Goods Store for Taxes
        Open a Business Bank Account & Credit Card
        Set up Accounting for your Sporting Goods Store
        Get the Necessary Permits & Licenses for your Sporting Goods Store
        Get Sporting Goods Store Insurance
        Define your Sporting Goods Store Brand
        Create your Sporting Goods Store Website
        Set up your Business Phone System
        You have found the perfect business idea, and now you are ready to take the next step. There is more to starting a business than just registering it with the state. We have put together this simple guide to starting your sporting goods store. These steps will ensure that your new business is well planned out, registered properly and legally compliant.
        
        STEP 1: Plan your business
        A clear plan is essential for success as an entrepreneur. It will help you map out the specifics of your business and discover some unknowns. A few important topics to consider are:
        
        What are the startup and ongoing costs?
        Who is your target market?
        How much can you charge customers?
        What will you name your business?
        Luckily we have done a lot of this research for you.
        
        What are the costs involved in opening a sporting goods store?
        The entrepreneur must rent a retail space for his sporting goods store. Alternatively, he could purchase a website for his store. Additional costs include purchasing the initial inventory, paying employees to man the registers and stock the shelves, obtaining a business license and insurance, and connecting/running the utilities. A computer and high-speed Internet connection will also be necessary for inventory research purposes.
        
        What are the ongoing expenses for a sporting goods store?
        Ongoing expenses include the cost of employee wages, workers' compensation insurance, utilities, rent, and inventory. The typical sporting goods store clerk makes around $8 to $10 per hour. If you do not want to manage the business, a sporting goods store manager will require a salary in the range of $25,000 to $35,000 per year. The monthly Internet connection will likely run between $40 and $60. If you do not want to clean the store yourself, a cleaning service will be necessary. Such a service typically costs about $120 for 1,000 square feet and upwards of $175 for a 3,000 foot space. Monthly utilities will likely run between $100 and $200 per month depending on the time of year. If you decide to rent your retail space instead of purchasing, monthly rent will likely cost between $700 and $2,000 per month depending on the size of the space and the specific location.
        
        Who is the target market?
        Sporting goods store business owners typically prefer selling to coaches of youth sports teams, junior high school teams, and high school teams. These coaches buy sports equipment in bulk so each player on the team has enough gear to make it through the year. Customers who prefer high-end sports equipment are also coveted as they are willing to pay a premium for high-quality items. Such items usually carry a larger profit margin for the business owner.
        
        How does a sporting goods store make money?
        Sporting goods stores make money by selling sports equipment at a profit. Once inventory is ordered, the price of these goods is then marked up so the business can make enough profit to cover overhead expenses and continue operations.
        
        How much can you charge customers?
        Sporting goods have a wide price range. As an example, shock absorbers for tennis rackets will sell at $5 for a pack of two. A baseball mitt can sell for upwards of $150 or more. A set of golf clubs will retail for several hundred dollars. Sports drinks will sell for $1 to $3. Keep your prices in line with the competition and your customers will remain loyal.
        
        How much profit can a sporting goods store make?
        The profit ceiling hinges on the size of your sporting goods store as well as the size of your market. If your business is operating like a well-oiled machine, it is possible to make a profit of several thousand dollars per month. If you grow at a rapid pace and reach the level of success achieved by sporting goods chains like Dick's Sporting Goods, it is possible to make several hundred millions or more in profit each year.
        
        How can you make your business more profitable?
        One of the best ways to make money as a sporting goods store owner is to purchase used sports equipment from customers and re-sell it for a profit. Accept items in decent shape, clean them up and you will eventually sell them for more than you paid. If you are particularly knowledgeable or skilled as an athlete, you can pitch your services as a sports instructor to clients. Another idea for a related side business is to set up batting cages, an electronic golf simulator or sports-related arcade games in or near your sporting goods store.
        
        What will you name your business?
        Choosing the right name is important and challenging. If you don’t already have a name in mind, visit our How to Name a Business guide or get help brainstorming a name with our Sporting Goods Store Name Generator
        
        If you operate a sole proprietorship, you might want to operate under a business name other than your own name. Visit our DBA guide to learn more.
        
        When registering a business name, we recommend researching your business name by checking:
        
        Your state's business records
        Federal and state trademark records
        Social media platforms
        Web domain availability.
        It's very important to secure your domain name before someone else does`,
  },
  {
    image:
      "https://images.medicinenet.com//images/slideshow/acupuncture-s1-what-is-acupuncture.jpg",
    title: "Massage therapy center",
    budget: 7000,
    field: "Beauty and health",
    tutorial: `Start a massage therapy business by following these 10 steps:
        Plan your Massage Therapy Business
        Form your Massage Therapy Business into a Legal Entity
        Register your Massage Therapy Business for Taxes
        Open a Business Bank Account & Credit Card
        Set up Accounting for your Massage Therapy Business
        Get the Necessary Permits & Licenses for your Massage Therapy Business
        Get Massage Therapy Business Insurance
        Define your Massage Therapy Business Brand
        Create your Massage Therapy Business Website
        Set up your Business Phone System
        You have found the perfect business idea, and now you are ready to take the next step. There is more to starting a business than just registering it with the state. We have put together this simple guide to starting your massage therapy business. These steps will ensure that your new business is well planned out, registered properly and legally compliant.
        
        STEP 1: Plan your business
        A clear plan is essential for success as an entrepreneur. It will help you map out the specifics of your business and discover some unknowns. A few important topics to consider are:
        
        What are the startup and ongoing costs?
        Who is your target market?
        How much can you charge customers?
        What will you name your business?
        Luckily we have done a lot of this research for you.
        
        What are the costs involved in opening a massage therapy business?
        There are a number of investments you’ll need to make before opening your doors. First, you’ll need a work space. Rent can run anywhere from $750/month to thousands, depending upon location and size of the space you need. Most landlords require first and last month’s rent as a deposit, so plan on budgetin fort least two months.
        
        Hopefully, you already have a massage table and bolsters, but if you don’t, now is the time to buy. It’s not necessary to purchase the most expensive table, which could cost upwards of $900; but you will want to invest in a solid, quality table, an investment of at least $300. If you plan on offering standard massages, you’ll also need to purchase a few bolsters and wedges, which will run you another $150. When you start to offer more specialized massages, like pregnancy massage, you’ll want to save up for additional bolsters, setting you back another $250.
        
        Your customers will need clean sheets and a blanket to keep them warm during their session. To avoid hours of laundry every day, most therapists purchase several days worth of sheets. At $35 per set, this can easily be one of your largest initial expenses.
        
        Many massage therapists offer special services, such as hot stone massages and essential oils. Consider the services you plan to offer and invest accordingly. Large bottles of lotion cost over $250, so if you’re not 100% sure which product you love, opt for the smaller bottles until you’ve made your final decision.
        
        To help reduce rent, many massage therapy entrepreneurs choose to share their workspace with chiropractors or physical therapists. This not only reduces monthly overhead costs, it ensures a steady flow of clients through an ongoing referral program.
        
        Lastly, don’t be tempted to forego purchasing an insurance policy. You’ll hopefully have a steady flow of customers coming into your facility; don’t put your business at greater risk by going uninsured. While your premium will be fairly inexpensive, cost is dependent upon the city and state you live in, location within the city, size of the business, and your experience level.
        
        Read our massage therapy business purchasing guide to learn about the materials and equipment you'll need to start a massage therapy business, how much to budget, nd wre to make purchases.
        
        What are the ongoing expenses for a massage therapy business?
        In addition to the standard overhead, you should have an insurance policy in place. Sheets should be laundered, lotion should be fully stocked, as should brochures and business cards. Don’t forget to incorporate continuing education expenses into your annual budget a wel
        
        Who is the target market?
        As a massage therapist, you have a distinct advantage over many business owners - you offer a service everyone values. The ideal client for your business is dedicated to holistic healing and will help spread the word about how your services stand out above the rest.
        
        How does a massage therapy business make money?
        Will your business be geared more towards offering a relaxing retreat or one where your clients come to get relief from chronic pain? As the owner of a massage therapy business, you have the unique opportunity to heal, and make a great living doing it.
        
        While you can offer treatment packages, most massage companies bill per session. Those who accept insurance simply collect the insured’s co-payment and bill the rest directly to the insurance company. Should you choose not go the insurance route, offer your customers a little relief by accepting credit card payments for your services. Shelling out $60-100 per session is a luxury; do what it takes to keep those clients coming back month after month.
        
        Additionally, some entrepreneurs offer more than just their services, profiting from offering goods such as Biofreeze, essential oils, books, and CDs. If you choose this avenue, just remember, there’s nothing worse than leaving a massage, only to be bombarded with someone wanting more money.
        
        How much can you charge customers?
        While the numbers vary by region, the national average massage therapists charge is $60 per hour. If you plan to accept insurance, discuss the fee structure with each company to ensure the allowable amount meets your facility’s needs.
        
        How much profit can a massage therapy business make?
        According to the U.S. Bureau of Labor Statistics, the average salary for massage therapists is $37,180. This number varies greatly, depending upon additional certifications, specializations, and your office setting.
        
        How can you make your business more profitable?
        While you’re in the business to heal, you’re also in it to make money. Here are a few ways you can increase the profit of your new business.
        
        Offer multiple payment options. Many consumers will find another place to go if your business doesn’t accept credit cards.
        Accept insurance. This opens your business up to a whole new set of clients that would otherwise be unavailable to you.
        Work nights and weekends. Make yourself available during the times your customers need you most.
        Accept gift certificates. Studies indicate consumers spent $130 billion on gift cards in 2015, with almost $1 billion going unused.
        Offer spa packages. If your vision is a more spa-like atmosphere, increase your earning potential by partnering with individuals to offer a bevy of spa services.
        What will you name your business?
        Choosing the right name is important and challenging. If you don’t already have a name in mind, visit our How to Name a Business guide or get help brainstorming a name with our Massage Therapy Business Name Generator
        
        If you operate a sole proprietorship, you might want to operate under a business name other than your own name. Visit our DBA guide to learn more.
        
        When registering a business name, we recommend researching your business name by checking:
        
        Your state's business records
        Federal and state trademark records
        Social media platforms
        Web domain availability`,
  },
  {
    image:
      "https://boscolocollection.com/lyon/wp-content/uploads/2018/04/Spa-Piscine-Boscolo-Lyon-8.jpg",
    title: "SPA",
    budget: 2500,
    field: "Beauty and health",
    tutorial: `Write a business plan
        It’s really important to write a business plan. If your day spa is going to be a journey, think of this part as starting the GPS. It’ll guide you to your destination and help organize your plans and priorities.
        
        Create your brand
        Start with the fun part—just don’t think it’ll be easy.
        
        Selecting a name for your business and creating your brand are essential first steps. You’ll figure out what you want to be called, how you’ll interact, and how you want to look—think of it as how you’ll tell your customers about your business’s personality. 
        
        Pick your spa’s name
        
        Your name should reflect your brand, the quality of your people and customer experience, and the range of the services you’ll offer. It may also include references to your community or family name. Picking a name is just that simple, right? Don’t worry if you’re not sure where to start. We’ve got a checklist on how to choose the perfect name for your spa or salon to help you with this step.
        
        Create your brand
        
        Your brand says everything about your business. It’s how you interact with clients and market to prospects, as well as how you present yourself visually.
        
        Your visual brand identity will appear on signs, inside your spa, and on your marketing materials. Major facets include your:
        
        Logo
        
        Color palette
        
        Typography
        
        Photography
        
        Of course, we’ve written a guide to help you figure out how to create a brand.
        
        Decide which spa services you’ll offer
        The International Spa Association (ISPA) defines a business as a spa if it offers at least two of these services to spa-goers: 
        
        Skincare (includes makeup)
        
        Massage care
        
        Body treatments (includes salon services and hair removal)
        
        You may already know how to do one or more of these, and that’s great. But, if you’re offering a service you aren’t familiar with, know you’ll need to hire an employee or bring in a partner who is. Or, you’ll need to educate yourself.
        
        Also, research any state or local licenses you’ll need to apply for and carry in order to offer the services you want. For help, here's our guide to writing the perfect spa menu, which should help you maximize revenue. Check out a video from industry expert Lisa Starr, for important service menu considerations during the COVID-19 pandemic. 
        
        Figure out what spa equipment you’ll need
        The size of your location and the services you offer should dictate the equipment you'll need before starting.
        
        Day spas may include showers and lockers for guests, and soundproof rooms if you plan to offer relaxing massages. Other items could include:
        
        Massage tables/chairs
        
        Linens
        
        Washers and dryers for linens
        
        Hot towel warmers
        
        Storage
        
        Eye and face masks
        
        Shower supplies (soap, shampoo, conditioners)
        
        Massage oils, incense, candles, and essential oils
        
        Office equipment, like a front desk, chairs, and point-of-sale devices
        
        Reception area furniture
        
        Pedicure ottoman
        
        An esthetician’s stool
        
        Wax warmers
        
        Hair removal lasers
        
        Exfoliating devices/pumice stones
        
        A Jacuzzi or other hydrotherapy tub or shower
        
        Much more...
        
        Research your particular place in the industry closely. Decide what equipment purchases you need to make before your business opens, and what you could buy later when space and finances allow.
        
        Decide on an audience
        You may have an idea about who you want your new business to serve, but really put some thought into it and write it down.
        
        Massage is a very popular service from a customer preference standpoint. 
        
        Seventy percent of regular of female spa-goers and 60% of male spa-goers told researchers they’d had one in the past year, according to the 2020 Spa Trends in America Report.
        
        Additionally, the report shows the services Americans are most eager to try next. There's a lot of interest—across different generations—in trying full-body skin treatments, facials, and advanced skin care. Providing these services could be a profitable investment in the future. Check out the report to see what's trending in your city. 
        
        Also, take a look at the wider spa industry for cues. About 41% of spa owners target men with new marketing promotions, according to a 2018 study released by ISPA. The share of male customers at spas grew from under 31% in 2007 to 47% by 2017, according to ISPA research.
        
        These spa-goers may be worth targeting as you decide who you want to serve.
        
        Retail sales and experience
        Starting a retail operation means you're willing to sell stuff—hair and skin products, equipment, merchandise, and most importantly, gift cards—at your day spa.
        
        Retail sales can be tricky—you'll have to hire or train staff to sell products and track inventory—but the payoff can add another 10% or more of revenue to your spa's bottom line. And, in a pandemic, retail can be an important revenue stream. 
        
        Also, think about the experience. How will a client make a retail purchase? 
        
        They could buy a product or merchandise from your front-desk staff. With the right spa software, service providers can easily upsell and recommend the perfect product during the service. If you’re going to sell products and merchandise online, it’s equally as important that the experience be easy to navigate.
        
        Think about how you'll make a sale—will you have options for cash and cashless purchases? Since retail can really prop up your bottom line, make sure this is an easy and painless process for your clients and your staff. 
        
        Consider how you'll track your inventory, replenish it when it gets low, and store it. If you need help, we've written a handy guide to how to earn money off retail at your spa.
        
        Sell gift cards
        
        Gift cards are a big part of retailing. You’re creating a year-round product, and gift card recipients tend to spend above and beyond their gift's value.
        
        For instance, a woman redeeming a $100 Mother's Day gift card may buy a few more products or add an extra service. That makes her visit worth $105 or even $150. 
        
        You've also created an opportunity to add a new client who may not be familiar with your services. Check out our guide on how to sell gift cards like a pro.
        
        Marketing
        Now it’s time to tell new clients about your spa. 
        
        Marketing is a catch-all term with lots of facets, so think about the most appropriate sort of marketing for your target customers in your area. 
        
        A few good ways to reach customers are:
        
        Digital marketing: 
        
        Social media may spring to mind first, and it's a great way to get the word out. Running promotions on Facebook and Instagram—maybe offering grand opening discount services or referral codes—attracts the public's attention and gets them to spread your reach.
        
        Get our step-by-step guide to Facebook marketing and guide to Instagram marketing to start you in the right direction. 
        Eventually, you'll want to incorporate email campaigns targeting both your existing clients and new prospects with incentives to get them in the door. 
        
        Our guide to email marketing will help you with the basics. 
        Print marketing:
        
        You may also consider printing flyers to hand out in your local area to let shoppers know about your day spa.
        
        This all costs money and time, so as part of your business plan, assess marketing costs. To get a handle on your expected marketing costs, check out our guide on how to create a marketing plan and budget, s we as the accompanying template.
        
        Costs
        By now, you should pretty much know how much money you'll need to run your day spa.
        
        In addition to the above, include the cost of rent (more on choosing a location soon), and the people you need to hire, in addition to everything else you'll need to pay to start your business up and keep it running. 
        
        If it all sounds a little daunting; don't worry. We have a handy blog on how much it really costs to open a spa.
        
        Location, location, location
        Choosing the right location for your business is exciting. Deciding on where to hang your shingle—what sort of neighborhood you'll fit into budget- nd lestyle-wise—sets the tone for your spa. 
        
        Some factors to consider are:
        
        Foot traffic
        
        Available parking
        
        Competitors
        
        Surrounding businesses
        
        Do they have the sort of clients you want?
        
        Zoning
        
        Some towns and cities won't let you open a business in a residential area, others may. Research this while getting your license to see what the rules are where you want to be.
        
        Our checklist on selecting the right location for your salon or spa should help you navigate the process a little more easily.
        
        Financing
        You're nearly ready to open a spa business. You've scoped out a location, written a business plan, and you've got a passion for making clients feel great. 
        
        Now it's time to find the financing to fund your dream.
        
        There are many ways to find the money to get a business off the ground. Some people self-finance and/or take personal loans from friends and family to help themselves get established. Others immediately look for a small business loan. 
        
        To decide what's right for you, visit the US Small Business Administration (SBA) website for information. The SBA provides a lender match program to help you find a loan that works.
        
        You'll also need to set up a business banking account to help you find financing and separate your personal finances from your business expenses.
        
        Choose your spa management software
        Scheduling staff and clients, marketing, managing payroll, reporting… for a small business owner, there’s no end to the job of running your spa effectively. 
        
        That’s where a great spa software system can step in to help. Look for one that handles your needs and automates as many tasks as possible so you can spend as much time as possible focusing on your clients and staff.  
        
        Booker by Mindbody is one such platform. It’s specially crafted with spa and salon businesses in mind and incorporates a lot of different functionality under one program. Importantly, Booker lets you offer a safe and high-end experience for your clients.
        
        Create a great user experience
        The word 'seamless' is overused. But it's also exactly what you want your customer's experience to feel like any time they visit your spa and website.
        
        Put yourself in your client's slippers while you're crafting your physical and web spaces.
        
        Website
        A few things to remember when designing a website is to make sure it’s clear, usable, and has a cohesive feel from your home page to a payment page and everything in between. 
        
        It should perform well on mobile devices to be responsive, which means fitting any screen. 
        
        Security is a big consideration for clients—if they're making credit card purchases, they'll want to trust that data is securely stored.
        
        Check out our guide to building a website for your business for tips.
        
        Lockers
        Just as clients wonder about their digital security, they're also thinking about the physical security of their things.
        
        Provide a secure locker area or cubbies that your front desk staff can monitor while people get spa or salon treatments. If people will need to change their clothes for certain services, you may want to provide a locker area in the bathrooms or designated changing area.
        
        Soundproofing
        Investing in soundproofing is a good idea if you're selling peace and relaxation. Nobody wants their deep-tissue massage interrupted by hearing someone in the next room over.
        
        Lighting and music
        Take the time to get the lighting and music correct in your day spa. 
        
        These details help set a calm, relaxing tone. Put people in a peaceful mood they'll remember the next time they're thinking about seeking out spa and salon treatments.
        
        `,
  },
  {
    image:
      "https://cdn1.treatwell.net/images/view/v2.i2490813.w720.h480.x369934FD/",
    title: "Beauty salon",
    budget: 2500,
    field: "Beauty and health",
    tutorial: `Start a beauty salon by following these 10 steps:
        Plan your Beauty Salon
        Form your Beauty Salon into a Legal Entity
        Register your Beauty Salon for Taxes
        Open a Business Bank Account & Credit Card
        Set up Accounting for your Beauty Salon
        Get the Necessary Permits & Licenses for your Beauty Salon
        Get Beauty Salon Insurance
        Define your Beauty Salon Brand
        Create your Beauty Salon Website
        Set up your Business Phone System
        You have found the perfect business idea, and now you are ready to take the next step. There is more to starting a business than just registering it with the state. We have put together this simple guide to starting your beauty salon. These steps will ensure that your new business is well planned out, registered properly and legally compliant.
        
        STEP 1: Plan your business
        A clear plan is essential for success as an entrepreneur. It will help you map out the specifics of your business and discover some unknowns. A few important topics to consider are:
        
        What are the startup and ongoing costs?
        Who is your target market?
        How much can you charge customers?
        What will you name your business?
        Luckily we have done a lot of this research for you.
        
        What are the costs involved in opening a beauty salon?
        Experts recommend you have at least $60,000 before opening a beauty salon, but this number is highly dependent on the property costs in your area and the number of chairs you plan to have (1,000 square feet will fit about 6 chairs.) Equipment will typically cost around half the initial capital, or around $30,000. The costs of licensing to operate vary widely (anywhere from $100 to $2,000.)
        
        Advertising costs should also be factored in, with television time costing up to $15,000. If you choose to use a pay-per-click model for digital ads, your costs may be substantial due to the ubiquity of beauty salons.
        
        What are the ongoing expenses for a beauty salon?
        Owners can expect to pay for the following expenses:
        
        Salaries
        Supplies
        Advertising
        Equipment replacement (wear and tear on chairs, dryers, etc.)
        Building costs (e.g., utilities, permits, upgrades)
        Who is the target market?
        Beauty salons will profit most from repeat clientele. You’re looking for men and women who are willing to pay more for quality work, and those who need set services every month.
        
        How does a beauty salon make money?
        Beauty salons make money by exchanging beautifying services for money. It is important to find the right profit margins for your services. Some salons use a base rate for coloring or haircuts. A good rule of thumb is to look at the pricing structure of other salons in the area, and aim for a middle-of-the-road approach. Customers do have their budget lmitsbut they may become instantly suspicious about the quality of work if the rates are too low.
        
        How much can you charge customers?
        The exact amount to charge customers will be dependent on where you are, who your clientele is, and the experience of the stylists. Celebrities may pay up to $800 for a hair service and $200 for their nails. Typically though, you’ll want to set your stylists up on a tier setting, with junior stylists charging around $30 for a cut, intermediates charging around $40, and masters charging $50 to $60. Manicures and pedicures can be anywhere from $15 for a basic treatment to $30 for a spa manicure.
        
        How much profit can a beauty salon make?
        On average, profits can be up to 15% of the total amount your salon brings in. You can also make additional money selling retail products, such as specialty shampoos and conditioners. Should you want to make additional money, you’ll need to adjust your service prices, but increasing prices may scare off customers.
        
        How can you make your business more profitable?
        Look for the ways you can make your customers look better based on their needs. For example, if you have a lot of middle-aged women coming in, offer more services to lift and refresh aging skin. Look into bringing in cosmetic specialists from time to time for special events (e.g., offer Brazilian hair straightening for a month.) There are a variety of new trends that hit the market, like vampire facelifts and sunset coloring that can drive interest and set your salon apart. You can also franchise if your business grows large enough, but 99% of beauty salons have a single location.
        
        What will you name your business?
        Choosing the right name is important and challenging. If you don’t already have a name in mind, visit our How to Name a Business guide or get help brainstorming a name with our Beauty Salon Name Generator
        
        If you operate a sole proprietorship, you might want to operate under a business name other than your own name. Visit our DBA guide to learn more.
        
        When registering a business name, we recommend researching your business name by checking:
        
        Your state's business records
        Federal and state trademark records
        Social media platforms
        Web domain availability`,
  },
  {
    image: "https://farm5.staticflickr.com/4662/39872409124_8de7393659_b.jpg",
    title: "Coffe shop",
    budget: 1500,
    field: "Entertainment",
    tutorial: `How to start a coffee shop step-by-step
        To get you started, we've created a quick step-by-step guide to setting up your own coffee shop. Read on for more details on each step.
        
        1. Find your niche. It’s easy to think that you can’t compete with the big players in coffee – but, as specialist independent coffee shops have shown, by finding a great niche and filling it expertly, you can find success.
        2. Find a location. Location is key. You’ll want to think about footfall, competition, and other businesses in the area.
        3. Find suppliers. A great coffee shop relies on great quality produce. Building a solid supply chain is a key priority.
        4. Build the right team. It's hard to run a coffee shop by yourself. You’ll need to know where to find good staff, and how to stay on the right side of the law.
        5. Get the legal side sorted. You should get registered with HMRC and get insured before you start trading – if you fail to do so, you could be in for a shock.
        6. Market your coffee shop. You can have the best coffee in the business, but you need people to know about it. Learn how to market your coffee shop.
        7. Encourage repeat business. Finally, once you have customers, you want them to keep coming back. Think about ways to encourage repeat custom.
        1. Find your niche
        Finding your niche is important for a market as crowded as coffee.
        
        Depending on where you are in the country, it could simply be that your niche is that you are the only specialist coffee shop in the area. However, in busier areas, you’ll need to differentiate yourself: for example, do you specialise in V60 and Aeropress? Or, like Black Sheep, do you use a specific kind of bean?
        
        It'll take some research, but finding a unique take on coffe ahtat you - and your potential customers - are excited about is the first step to building a thriving business.
        
        2. Find a location
        Location, location, location – it’s a crucial consideration for consumer businesses with premises.
        
        You’ll want to look for somewhere with a good amount of passing traffic, close to other businesses and amenities. If your search area is broad, you should also think about the locations in which you’re most likely to be able to secure the best staff.
        
        Finally, you need to think about budget –and n’t forget business rates.
        
        3. Find suppliers
        A great coffee shop needs great produce. You’ll need to pick your suppliers carefully, and you’ll need to look after those relationships carefully.
        
        Remember that your choice of supplier might also be connected to your specialism – for example, if you choose a specific type of bean, you’ll need to find the best supplier in that category. You’ll also need to think about things like credit and payment terms, which will be especially important in the early months as you are building up custom
        
        4. Build the right team
        Staffing is crucial. You’ll need specialist baristas and potentially front of house staff.
        
        Coffee is now such a big business that there are several specialist barista recruitment agencies, but you should make sure that you understand the costs of using recruitment agencies.
        
        For more, read our interactive guide to hiring your first employee and, if relevant, how to hire temporary employees, which can be particularly useful during busy seasonal periods.
        
        5. Get the legal side sorted
        There are some key steps you need to take immediately in order to be on the right side of the law. You’ll need to choose a legal structure, and register with HMRC. After that, you’ll need to pay corporation tax, and you may need to register for VAT.
        
        You’ll also need to think about insurance. Simply Business offers specialist coffee shop insurance, which includes covers such as public liability and employers’ liability insurance.
        
        6. Market your coffee shop
        Once you’re set up, you need customers! Marketing your coffee shop is one of your most important priorities in order to make sure people start coming through your door.
        
        Your marketing efforts will likely be split across multiple channels, both online and offline. This could be as simple as a great A-board outside, or as advanced as a complete Google My Business strategy.
        
        It’s also useful to learn what not to do, so check out our 7 common small business marketing mistakes.
        
        7. Encourage repeat business
        Now that you have customers, you need to encourage them to keep coming back. Repeat custom is the most valuable kind, and you should take all the steps you can to make sure you build it.
        
        Many coffee shops operate loyalty schemes, or you might also investigate ‘local currency’, depending on where you’re based.
        
        Insure your coffee shop
        `,
  },
  {
    image:
      "https://fastly.4sqi.net/img/general/width960/65863384_lmUJEFnbxuw4RLB-_BH3wdLshE3qq-F7EP99D_VpeZg.jpg",
    title: "Night club",
    budget: 2500,
    field: "Entertainment",
    tutorial: `STEP 1: Plan your business
        A clear plan is essential for success as an entrepreneur. It will help you map out the specifics of your business and discover some unknowns. A few important topics to consider are:
        
        What are the startup and ongoing costs?
        Who is your target market?
        How much can you charge customers?
        What will you name your business?
        Luckily we have done a lot of this research for you.
        
        What are the costs involved in opening a nightclub?
        If you are starting on a limited budget te be way to get going is to make a deal with an existing nightclub as a “promoter” that gives you a certain night per month (or per week if it gets popular), to hold a special event at the club. The club may charge a minimum bar cost that you must pay for the night, so you can lose money if nobody shows up, but this is a modest way to see if you can attract a crowd for your party ideas.
        
        If you cannot attract a crowd for one night at an existing club, you may need to rethink your ability to be in this business.
        
        The second best way is to buy an existing club that is already successful. For this opportunity you will pay at least 10 times the annual profits to buy the club, not counting the costs of the real estate if it is included.
        
        If you are going to start a new club the costs vary widely depending on where it is. A modest neighborhood club could be around $100,000 for the fixtures, supplies, and equipment needed to get started. Other clubs, like the biggest ones in New York, cost tens of millions of dollars to open.
        
        The basic equipment needed is:
        
        Refrigerator(s) - $1,000 stand-alone style to $10,000 walk-in style
        Freezer(s) - $2,000 stand-alone style to $20,000 walk-in style
        Bottle Cooler(s) - $1,000 each
        Bar Cooler(s) - $1,5000 each
        Under-bar sink(s) - $900 each
        Draft beer equipment - $500 for each station
        Soda making equipment - $300 for each pouring station
        Ice Machine(s) - $2,500 each
        Glass racks and speed rails - $200 each
        Glass washing machine(s) - $1,400 each
        Bar Blender(s) - $250 each
        Glassware in various sizes - $25 per 24 glasses
        Bar ($4,000 to $10,000)
        Bar stools - $75 each
        Bar lighting - $1,000
        Bar supplies – Utensils, Condiments etc. $300
        Soda, beer, and liquor stock inventory - $10,000 to $50,000 (replaced daily as used)
        Read our nightclub purchasing guide to learn about the materials and equipment you'll need to start a nightclub, how much to budget, nd wre to make purchases.
        
        What are the ongoing expenses for a nightclub?
        The ongoing expenses are the labor costs, food costs (if food is offered), beverage costs, rent, utilities, marketing, and insurance.
        
        Who is the target market?
        The best customers are the ones who have lots of money and do not mind spending it on a wild night out. A handful of these big spenders can make a club very profitable. Attracting famous people is very good because they attract others.
        
        How does a nightclub make money?
        Selling drinks, possibly food, charging for admission, and, where possible, for special seating and/or special services offered to the customers. These special services can be anything from “lap dances” at strip clubs to bottle service (customers buy a full bottle of liquor to be exclusively served to them for a special price) at VIP tables in the best spots right next to the entertainment.
        
        How much can you charge customers?
        Drinks sell at the lowest prices of $1 per glass for cheap beer or a shot of cheap liquor up to hundreds of dollars for a bottle of fine wine, expensive champagne, and “top-shelf” alcohol. In the main American cities, the average drink sale is $2.50 for a beer and $5.00 for liquor drinks. Blended drinks sell for around $10.00 each.
        
        The key is to manage the “PC,” which stand for the percentage of cost. The lower the PC the more profits for the club. The typical PCs according to nightclub.com are, 17% for liquor, 23 to 25% for bottled beer, 21% to 22% for draft beer, 30% for wine, and 6% to 8% for sodas. The average PC is 21%. Based on the average, if the customer pays $3 for a drink the PC of 21% means that the contents to make that drink must cost $0.63 or less for the operations of the nightclub to normally make a profit.
        
        The cover charge to enter a club can be a modest $5 to $10 per person with this money used to help pay the bands and/or the DJ. It can be much higher for special clubs like strip clubs that charge a $25+ entry fee and even higher for special live music/performance events, which sell out due to the limited seating/capacity.
        
        How much profit can a nightclub make?
        A typical smaller club will make its owner $1,000 to $5,000 per week ($50,000 to $250,000 per year). A large metropolitan club can make $50,000 profit in a single night.
        
        How can you make your business more profitable?
        Make it more popular and host a variety of events as well as get into some of the sideline businesses that are club related, such as:
        
        Comedy Night: Hosting comedian(s) is an additional source of revenue if you charge for tickets.
        Live Music: Getting famous bands to play in smaller venues and charge premium tickets prices to see them in an intimate setting is a great way to make money.
        Open Mike/ Karaoke Night – Allow the customers to provide the entertainment.
        Private Parties – Rent the nightclub out or part of it for private parties.
        Record Audio and Video of the Bands Performance – Offer live recording services to bands that perform at the club.
        Live Radio Shows – Associate with a local radio station and produce a live radio show.
        What will you name your business?
        Choosing the right name is important and challenging. If you don’t already have a name in mind, visit our How to Name a Business guide or get help brainstorming a name with our Nightclub Name Generator
        
        If you operate a sole proprietorship, you might want to operate under a business name other than your own name. Visit our DBA guide to learn more.
        
        When registering a business name, we recommend researching your business name by checking:
        
        Your state's business records
        Federal and state trademark records
        Social media platforms
        Web domain availability.
        It's very important to secure your domain name before someone else does`,
  },
  {
    image:
      "https://fa42cf2086b5b4ffa910-42905546d373f150b1b6e131d3710cf2.ssl.cf3.rackcdn.com/business-plan-bar.jpg",
    title: "Bar",
    budget: 2500,
    field: "Entertainment",
    tutorial: `1. Write Your Bar's Business Plan
        A failure to plan is a plan to fail.
        
        A bar or nightclub is a type of business where a lack of initial planning can be expensive — if not impossible — to fix. That's why it’s important to have a business plan in place when you are opening a restaurant.
        
        The minor details aren’t extremely important, since they’re likely to change over time. For example, don't plan on your break-even point to be exactly two years from yesterday, rather 20-25 months pending on three or four key factors.
        
        Remember that writing out a bar business plan can help you identify holes in your business model that can be fixed before opening and reduce your risk of failure. It can also help you get your big goals in writing, like your mission statement and competitive advantage.
        
        2. Set Up Your Business Structure
        When starting any business or new company, one of the first big decisions you will make is how to structure your business. Specifically, do you plan to be a sole proprietorship, a partnership, an LLC, or a corporation?
        
        It's arguably easier to become a sole proprietorship or a partnership, but one problem with this structure is that you’re personally liable for lawsuits and debt incurred by your bar. In other words, if something goes wrong, there are no limits to your liability so you may need to forfeit personal assets to cover a loss should one occur.
        
        To avoid personal liability, the best option is for you to set up your restaurant or bar as an LLC or a corporation. These business structures act as an entity of their own and take on the business' liabilities, which limit your liability.
        
        So if someone slips and falls in your bar and wants to sue, they sue the business instead of you as an individual.
        
        The benefits of each of these are beyond the scope of this article, but you can learn more about them here.
        
        3. Trademark Your Name and Logo
        While using a trademark grants you protection of your bar’s name or logo within a certain geographic area, it’s difficult to enforce protection without registering your trademarks with the United States Patent and Trademark Office (USPTO).
        
        To trademark your name and logo, I’d recommend hiring an intellectual property attorney instead of trying to go at it alone, as the trademark process is quite complicated.
        
        Before you trademark a logo, be sure to have the logo designer grant you the copyright as well, or at least the rights to use the logo for your business.
        
        4. Obtain the Proper Licenses
        It’s important that your bar is properly licensed before you open for business to avoid legal trouble.
        
        Licenses are required in order to serve alcohol, food, and even to play music in your bar. Some of these are easy to obtain, while others are more complicated. Many cost money and time.
        
        Not acquiring the proper license is a silly mistake that can cause your bar to close down, so don’t skip this step.
        
        Learn here how to get a liquor license (and 2 other essential bar licenses). 
        
        5. Choose a Location
        Location is everything. Here are a few things to consider before choosing the right location for your bar:
        
        Your Style – Are you formal? Elegant? Casual? This can determine the type of customers you’re likely to appeal to.
        Demographics – Different areas of your city appeal to different demographics. If you’re looking to appeal to college students, opening near a university makes sense. If you’re looking to attract higher-class customers, set up shop in the more affluent part of town.
        Accessibility and Parking – If you’re attracting tourists, parking is less of an issue since they’re likely to call a cab or use Lyft or Uber. However, tourists are less likely to be repeat customers. Keep this in mind when choosing your location.
        Zoning Restrictions – Can you open a bar here?
        Rent and Utilities Costs – Will you be able to make this up in sales with the type of customers you’re going to draw in?`,
  },
  {
    image:
      "https://www.club-sandwich.net/images/photoarticles/folie-food-truck.jpg",
    title: "Fast food truck",
    budget: 1000,
    field: "Restauration",
    tutorial: `How to Start a Food Truck Business
        That work unfolds in a multistep process that countless food truck businesses have followed to success.
        
        The following is a general overview of those steps in rough chronological order — although would-be food truckers hoping to launch sooner rather than later will need to tackle multiple pre-opening projects at once.
        
        Step 1: Find a Niche and Begin Planning Your Menu
        Your first move as a new food truck vendor is to find your niche. Naturally, you’re going to be most comfortable hewing to the cuisines and techniques you know best, but the real key is finding a lane within that comfort zone that no local food truck appears to do — or, at least, does as well as you believe you can.
        
        You want your mobile eatery to be different enough that, over time, customers come to associate it with a particular culinary product or even a specific menu item.
        
        Unlike brick-and-mortar restaurants, food trucks can’t rely on ambience or a sense of place to draw in customers and keep them coming back. They can’t exploit the thrill of watching the big game in a beer-soaked sports bar or reconnecting over a candlelit meal and a white tablecloth.
        
        They have only the quality and innovativeness of their food, and to a lesser extent their branding, to set them apart.
        
        In the real world, successful food trucks look less like the undifferentiated neighborhood pub — a fun but ultimately forgettable place to grab beers and burgers with friends — than the hole-in-the-wall joint that serves one really memorable type of burger you can’t get anywhere else in town.
        
        In my own travels, I’ve encountered — and remembered — niche trucks that exclusively or primarily serve:
        
        Ice cream sandwiches with several different cookie, ice cream, and topping or filling combinations
        Subcontinent-inspired burritos with meat and vegetarian curry fillings
        Mac and cheese with multiple cheese, noodle, and topping combinations
        Grilled cheese sandwiches with multiple bread, cheese, and filling combinations
        Cornish pasties with nontraditional fillings, such as apple and brie, lentil curry, and carne asada
        Multiple types of arepa, a stuffed cornmeal cake that’s a staple in Venezuelan cuisine
        These concepts might not tempt your own palette or even your sense of what a food truck should be, but that’s OK. They appeal to enough would-be customers to sustain thriving food truck businesses.
        
        Once you’ve selected your niche, begin planning your menu. Exceeding your customers’ quality expectations and ensuring everything on your menu is available most (ideally all) of the time are both much easier to achieve with a simple menu that has lots of common ingredients.
        
        Imagine a sandwich board with four or five entrees and a handful of apps and snacks, not a double-sided encyclopedia of your preferred cuisine.
        
        Step 2: Draw Up a Food Truck Business Plan With Detailed Financial Projections
        Next, draw up a business plan that details your concept and makes comprehensive financial projections for your first three years of operation based on your estimated startup and ongoing expenses and revenues.
        
        Your business plan needs to encompass most if not all of the items on this list:
        
        Food truck licensing requirements and costs in your area
        Initial and ongoing local health department inspection and safe food service requirements
        Your food truck’s operational model — roaming, residence-based, or something in between — and how much private catering you plan to do, if any
        What type of food truck you’ll need (whether a full-size truck or cart)
        Costs for your truck or cart and cooking equipment, and whether you plan to buy new or used
        Where you plan to prepare food, if not entirely in your mobile eatery, and costs for a fixed prep or cooking space like a commissary or nonprofit commercial kitchen
        Where you’ll park your truck overnight
        Your menu design and ingredient costs
        Ongoing overhead costs like parking, propane, insurance, and business services such as payment processing and point-of-sale equipment
        Your marketing plans and costs, including website development and social media marketing`,
  },
  {
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/11/24/34/c6/mandarin-cake-shop-bakery.jpg",
    title: "Pastry shop",
    budget: 1000,
    field: "Restauration",
    tutorial: `1
        Research about a suitable location and existing competition in the area. Find a high-traffic site, such as a mall, in an area that does not have too many pastry shops. Take into consideration the type of pastry shop you would like to have such as a café, a restaurant, or a take-away stand. An area with coffee shops and cafés can provide clients who might buy your pastries.
        
        2
        Write a business plan as a guide for the business and as a prerequisite for accessing funding. Include an executive summary detailing what the business is about; the management and ownership; a market analysis; the marketing and sales strategy; and how you will utilize available financial resources.
        
        3
        Obtain licenses to operate the pastry shop, which include: a business license, food safety license, state sales tax license and federal tax employee identification number. Visit the Small Business Administration portal to find out state-specific requirements for applying for state licenses (business, sales tax and food safety licenses). Note that before beginning operations you will need to pass an inspection from a health department official.
        
        
        4
        Visit the Internal Revenue Service website to apply for the federal tax employee identification number. Apply online and provide information such as the management and ownership structure of your business; number of employees; your name and address; and the name of the business and physical address.
        
        5
        Obtain a small-business loan if you do not have sufficient personal financing. Visit lenders such as banks which offer Small Business Administration loans. Make an application by providing information such as structure of the business; how you will use the loan; your credit history; business experience; available collateral; and business license numbers.
        
        6
        Develop a pastry menu by taking into consideration factors such as what your competition is offering, needs of the target market and current trends in the pastries industry. Think about a niche market such as customers with allergies or those who will buy high-end pastries. Price the pastries by considering ingredients, labor costs, business utilities and the intended profit margin.
        
        7
        Buy equipment and supplies for the shop. These include wax paper and packaging boxes, baking bowls, mixers, measuring devices, pastry displays and baking equipment such as commercial ovens. Buy these from local restaurant or bakery equipment vendors or by attending an auction suitable for small startups like yours.
        
        8
        Launch your pastry shop with a grand opening during which you offer free samples of your pastries to customers. Market your small business by setting up a website and placing flyers in strategic places such as malls or cafés. Hire at least two friendly servers to attend to customers.
        
        `,
  },
  {
    image:
      "https://www.doghousedaycare.com.au/wp-content/uploads/2019/07/Play-area-pic_homepage.jpg",
    title: "Doggy daycare",
    budget: 7000,
    field: "Pets care",
    tutorial: `You’ve been pondering it for a while, but you’re finally ready to start your very own dog daycare business. You’ve certainly picked a good time —the pet industry is booming, with recent trends showing that people spent an estimated $99 billion on their beloved animals in 2020. 

        You’re probably itching to get moving and start inviting some canine customers into your business, but before you can open your dog daycare, there are a few things you need to know. 
        
        At Gingr, we’re familiar with the ins and outs of starting a dog daycare. We’ve helped hundreds of new daycare owners streamline their management practices with our powerful dog daycare software. We’ve seen what it takes to thrive with a doggy daycare business, and we want to help you achieve that same success. 
        
        We’ve come up with a list of top considerations and insider tips to know before you start your own daycare. We’ll cover these tips in the following sections:
        
        Financial Considerations for Starting a Dog Daycare
        Doggy Daycare Rules and Regulations to Know
        7 Essential Steps to Starting a Doggy Daycare
        Starting a dog daycare will take work, but is ultimately one of the most rewarding career paths for animal lovers. By following these tips, anything is paws-ible with your new business. Let’s jump in!
        
        Financial Considerations for Starting a Dog Daycare
        When thinking about starting your dog daycare, the first few questions on your mind are probably related to the financial aspect of the business. Let’s go over some of the most common financial considerations of creating and running a dog daycare.
        
        How much can you make from a dog daycare?
        The profitability of your dog daycare will depend on a few factors such as:
        
        Your ability to reach your target market
        The services you decide to offer (daytime and overnight care, training, etc.) 
        How you decide to price your services
        How you manage your money once you get up and running
        The demand for your services in your community
        Your fixed and variable business costs
        The amount of money you’re able to make from your dog daycare business will depend on this unique combination of factors as well as fluctuating market conditions. 
        
        Ultimately, to make a profit, your revenue must outweigh your costs. Check out this dog daycare business plan guide for detailed profit equations you can use to predict your profit margins for your new business.
        
        How much does it cost to open a dog daycare? 
        Opening a dog daycare will come with a few basic costs that are necessary to get your business started. These costs include:
        
        Facilities: You need space for your canine guests to play and sleep when they’re in your care. Therefore, you must purchase or rent a physical facility for your daycare business. 
        Equipment: You’ll need to purchase playground equipment such as play structures, toys, and water features. Additionally, you’ll need care-related equipment such as kennels and cages, food and water bowls, dog beds, leashes, treats, and cleaning supplies.
        Staff: You’ll likely want to bring on a few staff members to help out, so one of your costs will be employee wages.
        Although it will add to your start-up costs, investing in high-quality equipment upfront will save you from having to constantly replace items due to wear and tear. Plus, your customers will be impressed right off the bat when they see your business utilizing state-of-the-art equipment.
        
        What is the business model of a dog daycare?
        Dog daycares rely on repeating visits from regular customers to stay in business. After all, it’s much more cost-effective to secure the loyalty of a repeating customer than to constantly invest time and money into soliciting short-term clients. 
        
        You have a few options for structuring your dog daycare business model to ensure customer satisfaction and loyalty, including: 
        
        Pre-paid packages: Offer customers the option to purchase convenient packages. For example, many customers like to drop their dogs off at daycare while they’re at work. You can offer different tiers of prepaid packages such as three, four, or five days of daycare services per week. This way, they won’t have to pay each time they pick up their pooch, which streamlines the customer experience.
        Memberships: Invite customers to join your exclusive loyalty rewards program and offer a discount when they sign up and/or a continuous discounted rate for daycare services. 
        Unique services: Offer your customers something extra that they wouldn’t normally get at other daycares, such as training or grooming services. 
        As you start planning for your new daycare, consider which of these business model routes you’re interested in pursuing, and incorporate it into your business plan. For example, if you want to offer special services, plan to hire a groomer or professional trainer on your staff.
        
        How do you price dog daycare services?
        It’s critical to strike the right balance with your prices to attract the widest possible range of customers. 
        
        Go too low, and your customers will worry that their precious pups won’t be receiving the highest quality of care. Go too high, and you’ll have to justify the price by offering top-quality services that customers can’t get elsewhere (which can come at a steep cost for your business). Also, if your pricing model is too complicated, it will turn off prospective clients and drive them to seek daycare services with another business.
        
        Conduct careful market research to investigate the prices of other dog daycare facilities in your area to make sure you’re in the right ballpark for your business’s prices. Justify any price increases with enhanced services, and be sure to promote your membership or loyalty program that offers discounted rates to recurring customers. 
        
        Your pricing sends a message to prospective clients right away about the level of service they’ll get with your business, so it’s imperative to make a good first impression.
        
        Doggy Daycare Rules and Regulations to Know
        In addition to financial considerations, legal requirements are another common concern for new doggy daycare owners. You want to make sure you’re conducting a legitimate operation that adheres to all rules and regulations. Read on for top legal considerations to know before starting your daycare business.
        
        Legal Requirements for Starting a Dog Daycare
        You’ll have to determine a few legal characteristics of your business before you can get started. First, consider how you want to structure your business entity. You have a few choices for structuring your business: 
        
        Sole proprietorship: If you’re the only one running your business, you can choose to maintain it as a sole proprietorship. All of your business activities will be under your name, and this is the easiest business structure to form. However, you can be held personally liable for your business’s debts.
        Partnership: If you have one or more business partners, you may consider creating a partnership. In this structure, you and your partners share liability. 
        Corporation: Corporations allow you to set up your business as a separate legal entity. In this case, your business can be held liable for debts or lawsuits rather than you as an individual. However, these are more complicated structures that are generally used for large businesses.
        Limited liability company (LLC): An LLC can consist of just you, your partner, or a group of people. In this structure, your personal assets are protected from any business debts or lawsuits in most cases. 
        Consider your long-term business goals to determine which type of structure you’d like to have for your doggy daycare. Once you’ve chosen your structure, be sure to register your business with your state government and consult with a lawyer to help you figure out the legal details.
        
        Additionally, check your state and local laws and regulations to determine the licenses or permits you need to start your business. Each state has different requirements for opening a business and specific health and safety regulations for animal-related businesses.
        
        Dog Daycare Insurance
        You’ll want to purchase business insurance before opening your doors to puppy pals and their caretakers. Dog daycare business insurance protects your business from liability if an accident or injury were to occur.
        
        There are three types of pet business insurance you should look into as you plan for your grand opening: commercial liability insurance, property insurance, and professional liability insurance:
        
        Commercial liability insurance: This insurance covers your business if an accident were to occur in the day-to-day operations of your dog daycare. For example, a customer might slip and get injured within your daycare, or a pipe could burst in your facility and damage nearby businesses. 
        Property insurance: Property insurance covers your physical daycare facilities and equipment if something like a natural disaster, robbery, or fire occurred. 
        Professional liability insurance: This insurance type relates to any accidents or injuries that directly relate to the activities of your dog daycare. For example, two dogs could get in a fight, or a dog could break free and run away. Your professional liability insurance can protect you and your business from fault in these instances. 
        Of course, you’ll do everything you can to keep customers, employees, and pups safe, but accidents happen. It’s better to be prepared ahead of time to protect yourself and your business.
        
        Common Dog Daycare Rules
        You’ll want to set some ground rules before you open your business so customers know what to expect and what’s required on their end before their dogs can visit. These rules are also critical to mitigate risk and protect yourself and your business from liability. A few common dog daycare rules are:
        
        Age restrictions: Extremely young puppies can be at risk in a dog daycare setting, so you’ll want to specify age restrictions for your daycare, such as no pups younger than five months. 
        Behavior: You don’t want to put other dogs at risk by having misbehaved or aggressive dogs at your daycare. Institute a rule that says canine guests should not have a history of aggression toward other dogs or people. 
        Vaccination requirements: All dogs should be up-to-date on their vaccinations before being allowed to play or stay at your dog daycare. 
        As you grow your client base, organizing and maintaining all your records on each visitor will start to get complicated. Dog daycare software can be a major asset in helping you collect client information to reference and update as needed. Your software system will store all the important details in one place, keeping your records organized and saving you time and hassle.
        
        7 Essential Steps to Starting a Doggy Daycare
        Now that we’ve laid down a few foundational considerations, it’s time to get into the nitty-gritty of your planning process. Here are the essential steps to take to get your daycare business up and running:
        
        `,
  },
  {
    image:
      "https://americangroomingacademy.com/wp-content/uploads/2017/11/grooming-area2.jpg",
    title: "pet grooming",
    budget: 6000,
    field: "Pets care",
    tutorial: `Congratulations on your decision to start a dog grooming business! 

        Now is an exciting time to start a pet care business, as the industry is successful year over year. Americans are spending more on pets than ever before, a number expected to reach $99 billion this year.
        
        But now that you have made the courageous decision to start your business, you may be overwhelmed with what to do next. There are many steps ahead on your journey to creating a dog grooming business, from legal paperwork and licensing to selecting a name and designing a logo. 
        
        We created this guide to lead you through the process of starting a dog grooming business. Read on for everything you need!
        
        Create a dog grooming business plan.
        To start a business, you need to write a business plan. This comprehensive document is necessary to secure funding and includes crucial information about your business, such as market and financial analyses and management structure. 
        
        Select an operating concept.
        It’s time to decide where you will operate your dog grooming business. 
        
        Your choices include:
        
        Rent space in a salon
        Run a mobile grooming salon
        Run a dog grooming salon from your home
        Run a dog grooming salon as the only groomer
        Run a dog grooming salon and invite groomers to rent space 
        Run a dog grooming salon and hire groomers to work for you
        Size and layout are significant factors when renting or purchasing space. A dog grooming business floor plan typically includes four sections: lobby, kennel or holding space, bath area, and grooming space.
        
        Operating out of your home might be the most cost-effective choice, but there are things to consider. Running a business out of your home can limit growth opportunities, making expansion both in physical and staff size difficult. You also might anger your neighbors, mainly because dogs are loud. If you decide to run your business out of your home, first verify if you can legally do so. 
        
        A growing trend is the mobile dog grooming business. Mobile dog grooming is convenient for pet parents and provides freedom for the business owner. While there are benefits, operating out of a van presents issues like faulty equipment and the cost of fuel. 
        
        Establish a business entity.
        Establishing a business entity is a crucial way to protect yourself from liability and save money on taxes. Consult with a lawyer to evaluate which option is best for your dog grooming business. Options include: 
        
        Limited liability company (LLC): Owners of an LLC are not personally liable for the business’s debts and liabilities. LLCs are exclusive to the US and join a corporation’s characteristics to a partnership or sole proprietorship.
        Corporation: A corporation is a group acting as a single legal entity. 
        Sole proprietorship: A sole proprietorship is a business owned and operated by one person. There are no legal distinctions between the business and the owner.
        Partnership: A partnership is a business owned and operated by two or more parties. Partnerships vary in how owners share liability and profits.
        Obtain insurance, licenses, and permits.
        Dependent on your location, the types of licenses, permits, registrations, and insurance required to start a dog grooming business vary
        
        Standard local, state and federal registrations include:
        
        Sales tax permit
        Employer Identification Number
        Occupancy Permit
        If you are working in a salon or your home, get general liability insurance to protect yourself from a dog bite or pet parent slipping.  
        
        If running a mobile grooming business, you most likely need to add a policy to your personal auto insurance policy since most don’t include commercial activity.
        
        Buy dog grooming tools and supplies.
        Be prepared for sticker shock. Tubs, dryers, and grooming tables can cost thousands of dollars. But, you can’t operate a dog grooming business without the necessary equipment. Essential investments include:
        
        Grooming tables
        Fur dryers
        Washing machines and dryers
        Bathing tubs
        Kennels
        Grooming hose
        Shower attachments
        Dog brushes 
        Combs
        Shears
        De-matters
        Gloves
        Grooming clippers
        Nail clippers
        Nail grinders
        Shampoo and conditioner
        Ear cleaning products
        Bandanas and bows
        Face masks
        Hand sanitizer
        Cleaning products
        Earn certifications and training.
        There are no legal certifications required for dog groomers, but training helps ensure you do an exemplary job and show customers you are qualified. 
        
        Training ensures you know necessary skills like:
        
        Breed-specific haircuts
        How to handle aggressive dogs
        Nail trimming
        Ear cleaning
        Virtual and in-personal schools offer training and certification. You might also consider training in bookkeeping software and business management.
        
        Establish pricing.
        Set your rates in a similar range to local dog groomers to ensure your business is competitive. Keep in mind breed, type of service, and the time it takes to complete the service when establishing rates.
        
        Consider bundling services together for special packages, offering punch cards, and offering first-time promotions. 
        
        Pricing should reflect actual cost, taxes, insurance, and a little extra for your savings. The more prepared you are for unexpected expenses like equipment failure or a pandemic, the better off you will be.
        
        Promote your dog grooming business.
        When starting, it’s crucial to spread the word. Marketing generates buzz, and you want people talking about your dog grooming business. Promote special offers and incentivize potential clients to try your grooming services. Some things to try:
        
        Create a memorable business name.
        Design a catchy logo.
        Design a professional website.
        Mail or email coupons.
        Launch a referral program.
        Give business cards and flyers to pet boutiques, vet clinics, animal rescues, dog trainers, and doggie daycares.
        Get active on social media.
        Launch advertising on Google and Facebook.
        Be engaged in local Facebook groups.
        Offer gift certificates as a part of a fundraising event. 
        Get pet care business software.
        Pet care business software keeps track of everything you need to operate a dog grooming business, including appointments, marketing, groomer schedules, communication, payments, and more. 
        
        Gingr is packed with time-saving features that make running your dog grooming business easier. Gingr simplifies your daily tasks while improving your employee and customer experience.
        
        Contact Gingr today to schedule a demo!
        
         
        
        `,
  },
  {
    image:
      "https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2021/01/The-Best-Electrician-Near-Me.jpg",
    title: "Electrician",
    budget: 700,
    field: "Handyman",
    tutorial: `Start an electrician business by following these 10 steps:
        Plan your Electrician Business
        Form your Electrician Business into a Legal Entity
        Register your Electrician Business for Taxes
        Open a Business Bank Account & Credit Card
        Set up Accounting for your Electrician Business
        Get the Necessary Permits & Licenses for your Electrician Business
        Get Electrician Business Insurance
        Define your Electrician Business Brand
        Create your Electrician Business Website
        Set up your Business Phone System
        You have found the perfect business idea, and now you are ready to take the next step. There is more to starting a business than just registering it with the state. We have put together this simple guide to starting your electrician business. These steps will ensure that your new business is well planned out, registered properly and legally compliant.
        
        STEP 1: Plan your business
        A clear plan is essential for success as an entrepreneur. It will help you map out the specifics of your business and discover some unknowns. A few important topics to consider are:
        
        What are the startup and ongoing costs?
        Who is your target market?
        How much can you charge customers?
        What will you name your business?
        Luckily we have done a lot of this research for you.
        
        What are the costs involved in opening an electrician business?
        The costs for starting an electrician business vary, but generally include licensing, insurance, fees for union dues, overhead and equipment costs, and rent for office space. In general, many startup companies spend at least $5,000 to get started. These costs do not include schooling or apprenticeship, which can range anywhere from $3,000 to upwards of $20,000, depending on whether you choose to attend a community college, a technical school, or a private university.
        
        What are the ongoing expenses for an electrician business?
        Ongoing expenses of running an electrician business are minimal. Most businesses must cover the cost of rent, licensing, and insurance. License renewal can cost up to $200 - $300 per year, depending on your state. You should budget $,500 $2,000 for annual insurance premiums. Rent costs will vary dramatically depending on your location. Price per square foot of office space can range anywhere from $1.50 - $6.00 or more. The best way to cut down costs would be to work from home or share office space with other small business owners.
        
        Who is the target market?
        Electricians make money by charging customers for their services. They may charge on an hourly basis, or they may request a flat fee for services.
        
        How does an electrician business make money?
        Preferred client types for this business are commercial accounts. However, residential customers can also be an ongoing source of income, provided that the business can service a rotating base of clients. This could involve contracting with a Homeowners Association, or some other organized community, to service residential customers.
        
        How much can you charge customers?
        Electricians may charge a wide range of fees, depending on their level of skill, the average local rates, and the type of work involved. However, most will charge between $40 and $100 per hour, with master electricians charging $100 to $150 per hour or more.
        
        How much profit can an electrician business make?
        Profit for an established electrician business ranges from between 1.5% to 2.0%, depending on the size of the company. Larger companies have lower margins, while smaller companies tend to have higher margins.
         
        
        How can you make your business more profitable?
        Expanding your team with some entry-level electrician helpers to take care of simpler jobs can help you increase your overall efficiency and take on more jobs. Adding additional, ancillary services, might also help. For example, consider partnering with a professional plumber and carpenter to take on larger jobs.
        
        What will you name your business?
        Choosing the right name is important and challenging. If you don’t already have a name in mind, visit our How to Name a Business guide or get help brainstorming a name with our Electrician Business Name Generator
        
        If you operate a sole proprietorship, you might want to operate under a business name other than your own name. Visit our DBA guide to learn more.
        
        When registering a business name, we recommend researching your business name by checking:
        
        Your state's business records
        Federal and state trademark records
        Social media platforms
        Web domain availability`,
  },
  {
    image:
      "https://procrew.b-cdn.net/wp-content/uploads/2020/06/plumber-at-work-in-a-bathroom-1024x683-1-768x512.jpg",
    title: "Plumbing",
    budget: 700,
    field: "Handyman",
    tutorial: `Steps to Start a Plumbing Business
        If you’re looking to start your own business as a plumber, here are some of the steps you can take to get started.
        
        Get Certified
        Plumbing requires you to have a strong foundation in math, science, and tech. However, you don’t need college degree — a high school diploma or GED will suffice to get you into a trade school or certification program. These vocational training programs help you gain the necessary skills and stand out to consumers as a trustworthy professional.
        
        Serve as an Apprentice
        Many certification programs or trade schools will also help you connect with professional plumbers who you can work with as an apprentice. This allows you to gain on-the-job training so you can hone your skills in a real world setting.
        
        Choose a Specialty
        Of course, there are plumbers who offer a variety of services. But as you train and work as an apprentice, you should consider which tasks you’re best suited for and what types of jobs you enjoy working on. You could serve as a residential plumber that fixes leaky pipes or clogged drains. Or you could perform sewer line inspections, complete large scale projects for home renovations, or work mainly with commercial clients.
        
        Invest in Equipment
        Depending on what specialty you opt for, you may be able to start a plumbing business fairly inexpensively. You’ll need pipes, fittings, and a variety of basic tools. The main expense is likely to be a van or truck that you can take to jobs and use to transport all of your professional equipment.
        
        
        Register Your Business
        To get your business officially up and running, you need to comply with state and local laws for operating such a business. Each state has different licenses, permits, and requirements, so check with your Secretary of State or licensing board to obtain and file the necessary paperwork.
        
        Create a Service Agreement and Pricing Formula
        Before you actually start working with customers, you should have a selection of services all with set prices, or at least a formula you can use to determine the cost of each job based on labor and supplies. You should also have contracts or agreement templates created to ensure a consistent experience.
        
        Keith Glass of The Plumbers Coach writes, “Consistency in pricing means a lot to your business. Neighbors do talk with one another and they will compare what they paid. It needs to be consistent or they will be a thorn in your side with bad online reviews and constant complaints.”
        
        Set Up an Office
        Admin tasks are also important when starting a plumbing business. You need a place where you can field phone calls from clients, keep important documents and run your marketing campaigns. At first, you may be able to save money by simply working out of a home office.
        
        
        Patricia Bonacorda of Spartan Plumbing, Heating and Air Conditioning shared on the Grow Plumbing blog, “If you want to keep expenses as low as possible at the beginning, consider a home office where you can set up a telephone, desk and filing cabinet. Or, rent a small space where you can take care of paperwork if you’re not comfortable working out of the house.”
        
        Start an Online Presence
        Most businesses understand the importance of creating a website and some social media accounts. These are important for plumbing companies as well. But for local service businesses, it’s equally important to focus on review sites like Yelp, HomeAdvisor and Angie’s List.
        
        `,
  },
  {
    image:
      "https://www.thefarmliving.com/wp-content/uploads/Inspecting-Poultry-Farm.jpg",
    title: "Poultry Farming",
    budget: 4000,
    field: "Agriculture",
    tutorial: `GETTING STARTED POULTRY FARMING
        Though some turkeys in today’s market are billed as “vegetarian fed” turkeys are not, by nature, vegetarians. Raised in the wild, they eat bugs and worms in addition to vegetation.
        
        Like other livestock operations, turkey farms rely on a nutritionist to ensure adequate diet – a diet that will change as many as 10 times over the life of the bird.
        
        Also like other forms of livestock, antibiotic use requires oversight by a veterinarian, and it is illegal to give any type of poultry hormones or steroids.
        
        Chicken farms that raise broilers have worked to improve their image by increasing transparency.
        
        In Kentucky, Hayden Farms offers a public viewing room, where guests can watch the chickens through glass, as well as a view of the technology in the control room, and an education facility. The Kentucky Corn Growers Association and Kentucky Soybean Association helped with the effort.
        
        HOUSING POULTRY COMFORTABLY
        Housing at commercial chicken farms has seen much scrutiny in recent years. Various options for meat birds or layers have pros and cons.
        
        Conventional housing systems are most common and consist of solid metal or mesh poultry cages with a sloped floor that house 3 to 8 birds. Water is provided through an overhead system, and feed is offered in a trough along the front of the cage. They may be stacked or spread across the floor, depending on available space.
        
        Conventional systems work well for broiler production, where supplying adequate feed for growth is the primary concern. In a layer cage, there are holes for the eggs to drop.
        
        If you are breeding chickens, you will want parent stock cages that allow mating and where minimal egg breakage is of primary concern. Breeding systems also include rearing cages that allow for chick growth.
        
        For those looking at raising chickens in backyard chicken coops, there are endless options. Some add perches, lighting, windows, even green roofs of drought-resistant plants that keep the coop cool in summer. Predator protection is likely a prime concern.
        
        It’s easy to repurpose an existing outbuilding for a chicken house, and if it’s in your backyard, decorative design elements may be desired.
        
        POULTRY FEEDING OPTIONS
        Commercially raised chickens are generally fed what is known as a complete feed that includes all the protein, energy, vitamins, minerals, and other nutrients necessary for proper growth, egg production, and bird health.
        
        Chicks are fed a high-protein starter diet from soon after hatching until 6 to 8 weeks of age. They are then switched to a finisher or developer diet with more energy than protein.
        
        All types of beans and peas provide good protein in poultry diets, but they must be processed (roasted or steamed). Raw, unprocessed beans contain enzyme inhibitors that interfere with digestion and nutrient absorption.
        
        Soybeans are a readily available and popular feedstuff and are always processed before being sold as a feed ingredient.
        
        Antibiotics and other medications can be added to poultry feed. Scheduled feedings provide a steady dose.
        
        Coccidiosis is a chicken disease that is hard to control environmentally, and mature chickens can develop a resistance if exposed to a mild case. Common practice is to feed coccidiostat feed until about 16 weeks of age then switch to untreated feed. Even if treatment of an outbreak in older chickens is required, treated feed cannot be fed in the final week before harvest.
        
        EGG-LAYING POULTRY BREEDS
        Breeds like the Ameraucana, Buff Cochin, and the Silver Laced Wyandotte are docile, make good pets, and are great egg-laying chickens that produce unique eggs.
        
        The White Leghorn is a classic chicken breed for eggs. It’s a prolific producer of large white eggs.
        
        The Black Copper Maran is a French breed that lays chocolate brown eggs.
        
        Deciding what type of eggs you want is part of making a chicken raising plan. Large, small, white, fancy – the options are many, as is the variety in the number of eggs the chicken will produce.
        
        As long as they are comfortably housed, well fed, and kept healthy, you can enjoy fresh eggs as often as you like.
        
        EXOTIC POULTRY BREEDS
        Chickens provide meat and eggs, for both the large and small producer. They also make good pets.
        
        The Silkie Chicken breed is one of the most unique, and friendliest, varieties. The breed originated in Southeast Asia prior to the year 1200 and is easily identified by its plume of silky feathers. They are inexpensive to keep, easy to care for, and thrive in both warm and cold climates. They can be affectionate, providing companionship and entertainment.
        
        It is important to only purchase Silkie chickens from a reputable breeder that is National Poultry Improvement Plan (NPIP) certified.
        
        Blue State Turkeys are another unique poultry breed. Sometimes called a Slate Turkey or a Lavender Turkey, they originated in Mexico more than 2000 years ago.
        
        Very rare, the Blue State Turkey is a heritage breed considered endangered by the American Livestock Breeds Conservancy.
        
        They are raised for meat, but they also make good pets and show birds. When left to roam, they will spend most of their time scouring for food and can be fed fruits and vegetables. They are easy to tame`,
  },
  {
    image:
      "https://www.namesnack.com/images/namesnack-flower-business-names-5700x3716-20200915.jpeg?crop=21:16,smart&width=420&dpr=2",
    title: "Flower Business",
    budget: 1500,
    field: "Agriculture",
    tutorial: `Start a flower shop by following these 10 steps:
        Plan your Flower Shop
        Form your Flower Shop into a Legal Entity
        Register your Flower Shop for Taxes
        Open a Business Bank Account & Credit Card
        Set up Accounting for your Flower Shop
        Get the Necessary Permits & Licenses for your Flower Shop
        Get Flower Shop Insurance
        Define your Flower Shop Brand
        Create your Flower Shop Website
        Set up your Business Phone System
        You have found the perfect business idea, and now you are ready to take the next step. There is more to starting a business than just registering it with the state. We have put together this simple guide to starting your flower shop. These steps will ensure that your new business is well planned out, registered properly and legally compliant.
        
        STEP 1: Plan your business
        A clear plan is essential for success as an entrepreneur. It will help you map out the specifics of your business and discover some unknowns. A few important topics to consider are:
        
        What are the startup and ongoing costs?
        Who is your target market?
        How much can you charge customers?
        What will you name your business?
        Luckily we have done a lot of this research for you.
        
        What are the costs involved in opening a flower shop?
        A flower shop business usually costs between $10,000 and $50,000 to open. The majority of this goes towards coolers for keeping flowers fresh, leasing a location, buying the initial order of flowers and floral-arranging supplies (e.g. floral tape, vases, floral foam, floral wire and preservatives). If a business will be delivering flowers, wages for an employee and a the price of a delivery van should be considered.
        
        Florists can keep these startup costs lower by purchasing only one cooler and reducing how many flowers they stock at a time. They also can offer delivery but only deliver in the morning and evening, before and after business hours, so they can make deliveries without closing their floral shop or hiring an employee to cover for them. Purchasing a van can also be delayed until the business is earning a profit.
        
        What are the ongoing expenses for a flower shop?
        The largest ongoing expense for a flower shop business are ordering flowers, which usually runs about 40 to 50 percent of sales. Other significant ongoing expenses include the cost to lease a space, employee wages and vehicle expenses (for businesses that have a delivery van).
        
        Who is the target market?
        Most people purchase flowers for special occasions, and many people give flowers to others even when there isn’t a particular event. Customers who have a significant amount of discretionary income, however, have more to spend on flowers than those who have less discretionary income. Therefore, flower shop businesses can usually sell higher-priced flowers and arrangements to more affluent customers.
        
        How does a flower shop make money?
        A flower shop business makes money by charging its customers for flowers. A flower shop will sell individual flowers and arrangements.
        
        How much can you charge customers?
        The price of flowers varies from around $5 or less for certain individual flowers to $100 or more for fancy arrangements. Events that call for multiple arrangements, such as weddings can easily reach $1,000 or more.
        
        How can you make your business more profitable?
        Flower shop businesses can increase their orders by keeping in contact with their customer base, especially around holidays, birthdays and anniversaries. They can increase their average order sale price by offering extra items, such as vases, and up-selling fancier arrangements.
        
        What will you name your business?
        Choosing the right name is important and challenging. If you don’t already have a name in mind, visit our How to Name a Business guide or get help brainstorming a name with our Flower Shop Name Generator
        
        If you operate a sole proprietorship, you might want to operate under a business name other than your own name. Visit our DBA guide to learn more.
        
        When registering a business name, we recommend researching your business name by checking:`,
  },
  {
    image:
      "https://retronaija.com/wp-content/uploads/2020/06/Rice-Farming-Business.jpg",
    title: "Rice Farming Business",
    budget: 1200,
    field: "Agriculture",
    tutorial: `Lack of understanding of the rice industry as a business. Many researchers have little appreciation of the rice industry as a business. It has been shown that the consumers have their preferences, which the processors seek to satisfy. The farm production sector supplies the raw material to the processors. This supply and demand system is however often distorted by political policy. The consumers demand a steady supply of good quality rice products at reasonable prices, the farmers want the highest prices for their harvest, and the processors and traders have to make a living in between. Meanwhile the government's policy is to import cheap rice for consumers, maintain a high local farm gate price for paddy, and leave the processing sector to the market forces. This uncertainty provides little incentive for the private entrepreneurs to invest in more efficient processing technologies. Big business has shied away from the rice processing business in countries like the Philippines, and therefore public sector research has to provide the small entrepreneurs with the technology.

        Opportunities in the rice business. To illustrate the rice business, let us analyze the case of a typical Filipino rice farmer and private sector processing enterprise.
        
        Rice farms in the Philippines are covered by the agrarian reform law, and the law has effectively dismantled the feudal landlord and tenant relationship, where the landlord owns the land and the farmer is a sharecropper. The average land holding is about 3 hectares, and the average scale of rice farming for most of Southeast Asia.
        
        The farm gate price of freshly harvested wet paddy ranges from $0.17 per kilo to $0.31 per kg depending supply and demand of rice in the market. Paddy pricing is very speculative, and when business intelligence indicates a shortage, prices of paddy at harvest shoot up. The farm yields of farmers also varies widely, but a farmer planting the high yielding variety and following recommended practice can easily produce 4 tons per hectare. The gross value of his production at an assumed $0.21/kg is therefore (4 tons/ha x 3 ha. x $0.21/kg x 1000) $2520. It is estimated that it costs the farmer $359 per hectare to grow rice, or $1077 for the 3 hectares. The farmer therefore nets $1443 in a cropping season of 4 months.
        
        A local trader assembles the harvest of farmers in an area and delivers the same to the processor. For his effort, the trader charges $0.013 per kg, or $156 for the 12 tons of paddy. The price therefore of wet and dirty paddy delivered to the processor increases to $0.223 per kg, or $2676. The average moisture of wet paddy during the wet season is 24% wb and has a purity of 95%. A kilogram of paddy at 24% wb weighs 0.868 kg at 14% wb after removing the 5% impurities, there is only 0.825 kg of clean and dry paddy out of one ton wet paddy. The effective price of paddy to the processor is therefore ($0.223/0.825) or $0.27 per kg of clean and dry paddy. On the average a good commercial mill working with good HYV paddy will yield 65% rice of which 80% is head rice, 17% is brokers, 8% is rice bran, and the remainder is the hull.
        
        From 0.825 ton of clean and dry paddy, a miller will yield 536 kg of ungraded milled rice, and 66 kg of bran. The average wholesale price of HYV ungraded rice is estimated at $0.46 per kg. Rice bran sells at $0.09 per kg. Rice hull has no commercial value, although some processors use it as a source of thermal energy. The processor therefore grosses (536 kg x 0.46) + (66 kg x 0.09) or $252.50 per ton of paddy bought. If he bought all of the 12 tons of the farmer, he makes gross of $3030. The cost of paddy was $0.223 per kg., $223 per ton, or for the 12 tons $2676. Add to this the cost of processing and marketing estimated at $0.025 per kg of paddy bought, or $25 per ton of paddy bought, or $300 for the 12 tons of paddy. The processors' net before taxes is therefore (252.50 - 223 - 25) or $4.50 per ton of paddy bought, or $54 for the 12 tons.
        
        A small processor with a 1 ton per hour mill, operating 8 hours a day for 200 days a year can process 1600 tons of paddy. His net sale if he operates at 100% capacity on an 8 hour day, would therefore be $7,200. Many mills operate 12 hours daily.
        
        Shares in the Value of the Processed Milled Rice. Another way of viewing the rice business is to look at the shares of the different players. Using the farmers 3 hectare farm as base where he harvest 4 tons per hectare, or 12 tons of paddy, the ex-plant value of the rice is shared as follows.
        
        
        
        Value
        
        Share
        
        Farm gate value of harvest
        
        $2520.00
        
        83.2%
        
        Cost of Farm Production
        
        1077.00
        
        35.6%
        
        Net to Farmer
        
        1443.00
        
        47.6%
        
        Traders' Fee (Cost of Paddy to Processor, $2676.00)
        
        156.00
        
        5.1 %
        
        Cost of Processing/Marketing
        
        300.00
        
        9.9%
        
        Processor's Net
        
        $54.00
        
        1.8%
        
        EX-PLANT VALUE OF MILLED RICE + BRAN
        
        $3030.00
        
        100%
        
        The farmer gets 47.6% of the processed value of his harvest while the processor only gets 1.8% of the market value of the farmer's harvest. The farmer's income is limited by the size of his land holding while the processor's income is limited only by his plant's capacity, and his capital to buy paddy. The 12 tons is only 0.75% of his 1600 tons processing capacity. Note that the cost of processing was based on the plant operating at 100% capacity, single shift.
        
        Farmer based Processing and Marketing Cooperatives. Farmer groups are encouraged by many governments to form cooperatives to engage in rice processing and trading. The idea is that farmers benefit from the profits of value added activities. Some countries have succeeded with cooperatives where others have failed. Some of the difficulties relate to appropriateness of technologies used, organization, and management of resources. The lack of technical and financial systems and procedures to safeguard against a conflict of interest between the farmers and their enterprise has been a primary cause of business failure.
        
        If the 3-hectare farmer was member of a cooperative engaged in processing and marketing, and he delivered all his harvest to his Coop, he would get a rebate of 1.8% of the ex-plant value of his harvest. Not much for all his trouble. From a Coop Plant Manager's perspective, to operate a 1 ton per hour plant, and assuming a farmer's a marketable surplus is 30% of his harvest, the plant has to obtain his 1600 tons from 445 farmers, or a farming area of 1 335 hectares.
        
        V. Balasubramanian (IRRI) says that cooperatives should be based clearly on needs expressed by members and should be managed by professionally trained people. He feels very strongly that failure of cooperatives in many countries is due to faulty financial management and political interference. He suggests that farmers participate in a cooperative venture using "units of riceland" as equity pledged to the cooperative. Farmers are offered a number of landshares depending on the extent of their riceland. Farmer shareholders work in the cooperative in different capacities depending on their qualification and experience, and they are paid as workers. Profits are shared based on the number of landshares. Farmers may sell or transfer their landshares as they wish to fulfill their social obligations. The cooperative is to managed by professional managers and engineers. Such concepts or their variations are being explored in the Philippines.
        
        An integrated production post-production system. There are efficiencies that can be attained with a market oriented, and integrated post-production system. Fragmented farms are consolidated under a single management, where the farmers are guaranteed an income no less than what they get as independent farmers. Farm production can be mechanized, and scheduled to enable the associated processing complex to have a steady supply of raw material whose quality is assured. The market's preference and demand can be met. Under such a scheme, the management group provides the financing and the technology.
        
        Consumer Market Orientation. Different consumer groupings depending on their economic status have their distinct preferences. In the Philippines, for example, where the high yielding varieties dominate in the market, it has been found that restaurants prefer the fluffy grains, and the rural consumers prefer the more sticky varieties. Fluffiness or stickiness depends on amylose content, and consumers associate this trait with rice. The Philippine rice consumers' quality criteria in order of importance are variety, purity, whiteness of polish, extent of broken grains, and presence of contaminants such as paddy seeds, weed seeds, stones, and yellow grains. There exits a set of official grades and standards, but the trade follows more informal and subjective guidelines. In the export trade, buyers set their own specifications based on their market. Prices are diverse depending on the quality of the milled rice. In the Philippines for example, the National Food Authority's imported rice for mass distribution is priced at $0.39 per kg, and the premium grade intended for the higher end market is priced at $0.51 per kg. Packaged, and graded rice for the class-A markets is priced in the supermarkets at $0.77 kg. With this price spread, It should pay to produce the highest quality rice.
        
        `,
  },
];
thefeed = [
  { title: "", image: "", text: "" },
  { title: "", image: "", text: "" },
  { title: "", image: "", text: "" },
  { title: "", image: "", text: "" },
  { title: "", image: "", text: "" },
  { title: "", image: "", text: "" },
];
// var insert = () => {
//   Pr.insertMany(project);
// };
// insert();
