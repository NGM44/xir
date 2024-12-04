import React, { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface TabSelectorProps {
  initialTabs?: string[]
  selectedTabs: string[]
  setSelectedTabs: (selectedTabs: string[]) => void
}

const TabSelector: React.FC<TabSelectorProps> = ({
  initialTabs = [
    'Fixed Income',
    'Fractional Real Estate',
    'Peer-to-Peer Lending',
    'Litigation Finance',
    'Renewable Energy',
    'Invoice Discounting',
    'Gold Investment',
    'Other'
  ],
  selectedTabs,
  setSelectedTabs
}) => {
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false)
  const [showRightArrow, setShowRightArrow] = useState<boolean>(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const toggleTab = (tab: string) => {
    const newTabs = selectedTabs.includes(tab)
      ? selectedTabs.filter((t) => t !== tab)
      : [...selectedTabs, tab]
    setSelectedTabs(newTabs)
  }

  const handleScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }, [])

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      })
    }
  }, [])

  const clearAll = () => {
    setSelectedTabs([])
  }

  // Updated animation variants with smoother transitions
  const tagVariants = {
    initial: { 
      scale: 0.95,
      opacity: 0,
      transition: { duration: 0.2 }
    },
    animate: { 
      scale: 1,
      opacity: 1,
      transition: { duration: 0.2 }
    },
    exit: { 
      scale: 0.95,
      opacity: 0,
      transition: { duration: 0.15 }
    }
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-4 bg-transparent">
      <div className="bg-transparent rounded-xl shadow-2xl border border-purple-500/20">
        <AnimatePresence mode="wait">
          {selectedTabs.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="flex gap-2 p-3 border-b border-purple-500/20 overflow-x-auto"
            >
              {selectedTabs.map(tab => (
                <motion.span
                  key={`selected-${tab}`}
                  variants={tagVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  layout
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full 
                           bg-gradient-to-r from-purple-600/20 to-blue-600/20 
                           text-white text-sm border border-purple-500/30 whitespace-nowrap"
                >
                  {tab}
                  <button
                    onClick={() => toggleTab(tab)}
                    className="p-1 hover:bg-white/10 rounded-full transition-colors"
                    aria-label={`Remove ${tab}`}
                  >
                    <X size={14} />
                  </button>
                </motion.span>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-xs text-gray-400 hover:text-white transition-colors whitespace-nowrap"
                onClick={clearAll}
              >
                Clear all
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative bg-gray-800/50 rounded-xl backdrop-blur-lg">
          <AnimatePresence>
            {showLeftArrow && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-800/90 
                         text-white rounded-r-lg shadow-lg backdrop-blur-sm
                         hover:bg-gray-700 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </motion.button>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showRightArrow && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-800/90 
                         text-white rounded-l-lg shadow-lg backdrop-blur-sm
                         hover:bg-gray-700 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </motion.button>
            )}
          </AnimatePresence>

          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="overflow-x-auto flex gap-2 p-3 scrollbar-hide scroll-smooth"
            style={{
              maskImage:
                'linear-gradient(to right, transparent, black 2%, black 98%, transparent)'
            }}
            role="tablist"
          >
            {initialTabs.map(tab => (
              <motion.button
                key={tab}
                onClick={() => toggleTab(tab)}
                initial={{ opacity: 0.9 }}
                whileHover={{ scale: 1.05, opacity: 1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className={`
                  relative flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium 
                  transition-all duration-300 whitespace-nowrap
                  ${
                    selectedTabs.includes(tab)
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20'
                      : 'bg-gray-700 text-gray-300 hover:text-white'
                  }
                `}
                role="tab"
                aria-selected={selectedTabs.includes(tab)}
                aria-label={tab}
              >
                <span className="relative z-10">{tab}</span>
                {selectedTabs.includes(tab) && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 w-1 h-1 bg-white rounded-full"
                    layoutId={`indicator-${tab}`}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TabSelector