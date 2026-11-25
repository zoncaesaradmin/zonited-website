.PHONY: help serve clean

# Static site root. Future build output can land in DIST.
DIST ?= dist
PORT ?= 8000
BIND ?= 0.0.0.0

help:
	@echo "Targets:"
	@echo "  serve  - preview on all interfaces (localhost + LAN) port $(PORT)"
	@echo "  clean  - remove build output and local junk"

serve:
	@echo "Serving on http://localhost:$(PORT)/ (and LAN)"
	@ipconfig getifaddr en0 2>/dev/null | sed 's|^|  phone/LAN: http://|;s|$$|:$(PORT)/|' || true
	@ipconfig getifaddr en1 2>/dev/null | sed 's|^|  phone/LAN: http://|;s|$$|:$(PORT)/|' || true
	python3 -m http.server $(PORT) --bind $(BIND)

clean:
	rm -rf $(DIST)
	find . -name .DS_Store -type f -delete
