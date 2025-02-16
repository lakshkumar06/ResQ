import React from 'react'
import { Link } from 'react-router-dom'

const LocDashMain = () => {
  return (
    <div className='w-1/2'>
      <div className="p-[50px] bg-red-900 text-white">
        <p className='text-[20px]'>
          Welcome,
        </p>
        <p className='text-[40px] font-semibold'>
          Laksh
        </p>
      </div>

      <div className="p-[2vw]">
        <div className="flex gap-[1em]">
          
          <Link to={'/FireDepts/Request'} className='w-1/2 mainBtn mainBtnGray flex gap-[1em]'><span className='flexCol'>
          <svg height='60' viewBox="0 0 43 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.6633 0.397261C31.7126 1.42345 33.6999 4.29265 33.6999 8.0543C33.6999 10.4192 32.3554 12.5959 30.8573 14.3325C29.3174 16.1177 27.3681 17.7197 25.6631 18.9626C25.5902 19.0158 25.5177 19.0688 25.4458 19.1213C23.7911 20.3304 22.4259 21.3279 20.3363 21.3279C18.2464 21.3279 16.8812 20.3304 15.2266 19.1213C15.1547 19.0687 15.0822 19.0158 15.0092 18.9625C13.3042 17.7197 11.3551 16.1177 9.81501 14.3325C8.31688 12.5959 6.9725 10.4192 6.9725 8.05432C6.9725 4.29267 8.95967 1.42348 12.009 0.397284C14.6099 -0.478002 17.6373 0.0997273 20.3363 2.0643C23.035 0.0997273 26.0624 -0.478002 28.6633 0.397261ZM27.5515 3.70137C26.0359 3.19138 23.7762 3.52132 21.5158 5.59903C20.8487 6.21206 19.8236 6.21206 19.1565 5.59903C16.8961 3.52132 14.6364 3.19138 13.121 3.70137C11.6673 4.19057 10.4587 5.59392 10.4587 8.05432C10.4587 9.14101 11.1199 10.5081 12.4547 12.0553C13.7476 13.554 15.4586 14.9761 17.0627 16.1454C19.0222 17.5738 19.488 17.8417 20.3363 17.8417C21.1843 17.8417 21.6501 17.5739 23.6096 16.1454C25.2137 14.9761 26.9247 13.554 28.2176 12.0554C29.5523 10.5081 30.2138 9.14101 30.2138 8.0543C30.2138 5.59392 29.005 4.19057 27.5515 3.70137ZM12.6292 30.676C16.9656 29.8358 21.6076 30.0243 25.3638 32.2647C25.8914 32.5794 26.3859 32.9715 26.8175 33.4561C27.6909 34.4373 28.1423 35.6568 28.1634 36.8795C28.608 36.5927 29.0533 36.2743 29.5056 35.9327L33.7058 32.7598C35.8081 31.1717 38.8634 31.1715 40.9661 32.7591C42.909 34.2261 43.6834 36.8588 42.2927 39.0881C41.3042 40.6727 39.8156 42.8641 38.3005 44.2674C36.7692 45.6858 34.5896 46.8783 32.9411 47.6741C30.9389 48.6405 28.7763 49.1748 26.6737 49.515C22.3759 50.2107 17.9038 50.1042 13.6543 49.2289C11.4826 48.7813 9.22585 48.5489 6.99558 48.5489H1.74323C0.780562 48.5489 0.000146408 47.7685 0.000146408 46.8058C0.000146408 45.8432 0.780562 45.0627 1.74323 45.0627H6.99558C9.46405 45.0627 11.9565 45.3196 14.3578 45.8144C18.1974 46.6055 22.2423 46.7008 26.1166 46.0737C28.043 45.7618 29.8419 45.2989 31.4256 44.5345C33.0139 43.7677 34.7997 42.7581 35.9318 41.7097C37.0764 40.6495 38.3575 38.8097 39.335 37.243C39.6299 36.7701 39.589 36.0877 38.8655 35.5413C38.0061 34.8924 36.6662 34.8926 35.807 35.5415L31.6071 38.7144C29.9302 39.9808 27.8666 41.336 25.3069 41.7441C25.0484 41.7855 24.7795 41.8231 24.5004 41.8564C24.3672 41.8803 24.2287 41.8964 24.0855 41.9017C22.7787 42.0316 21.2652 42.0618 19.5953 41.904C18.6369 41.8136 17.9334 40.9632 18.0238 40.0048C18.1144 39.0463 18.9648 38.3428 19.923 38.4334C21.3814 38.571 22.6897 38.5406 23.7997 38.4267C23.8222 38.4244 23.8445 38.422 23.8668 38.4197C23.9133 38.3928 23.9842 38.3437 24.0769 38.2624C24.8195 37.6144 24.8857 36.5293 24.2136 35.7742C24.0432 35.5829 23.8336 35.4111 23.5779 35.2587C20.8329 33.6213 17.1666 33.3478 13.2923 34.0985C9.43997 34.8448 5.61268 36.5641 2.75158 38.5931C1.9663 39.1499 0.878291 38.9647 0.321386 38.1796C-0.235496 37.3943 -0.0503568 36.3064 0.734893 35.7493C3.98487 33.4447 8.27075 31.5203 12.6292 30.676Z" fill="#750000"/>
</svg>

</span><span className="flexCol">Make a Donation</span> </Link>
          <Link to={''} className='w-1/2 mainBtn mainBtnRed flex gap-[1em]'><span className='text-[60px]'>+</span><span className="flexCol">Report an Emergency</span> </Link>

        </div>
      </div>
    </div>
  )
}

export default LocDashMain
