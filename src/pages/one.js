import React from 'react'
import Item from '../components/item';
const array = [
    { link: 'pricing', image: '/images/pricing.png', text: 'Pricing' },
    { link: 'news', image: '/images/news-tab.png', text: 'News tab' },
    { link: 'login', image: '/images/login.png', text: 'Login' },
    { link: 'exam', image: '/images/exam.png', text: 'Exam' },
    { link: 'widget', image: '/images/widget.png', text: 'Widget' },
    { link: 'grid', image: '/images/grid.png', text: 'Grid' },
    { link: 'top', image: '/images/top-header.png', text: 'Top Header' },
    { link: 'widget-2', image: '/images/recent-highlights.png', text: 'Recent Highlights' },
    { link: 'contact', image: '/images/contact.png', text: 'Contact' },
];
const TemplateWrapper = ({ children }) => (
    <div className="w-full animated fadeIn p-8">
        <div className="flex flex-wrap">
            {array.map((item) => <Item key={item.link} link={item.link} src={item.image} text={item.text} />)}
        </div>
    </div>
)

export default TemplateWrapper