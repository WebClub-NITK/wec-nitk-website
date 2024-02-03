'use client'
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const SpiderComponent = () => {
    const handleGridHover = (event) => {
        event.target.classList.add('glow');
      };
    
      const handleGridLeave = (event) => {
        event.target.classList.remove('glow');
      };
    
      return (
        <div class="relative h-full w-full bg-slate-950">
            <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div></div>
      );
};

export default SpiderComponent;
